import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import CustomImage from "@components/CustomImage";

export const getPostByName = async (fileName) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/ttt-tin/blogposts/main/${fileName}`,
    {
      cache: "no-cache",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text();
  if (rawMDX == "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX({
    source: rawMDX,
    components: {
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug, [rehypeAutolinkHeadings, {behavior: 'wrap'}]],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };

  return blogPostObj;
};

export const getPostsMeta = async () => {
  const res = await fetch(
    "https://api.github.com/repos/ttt-tin/blogposts/git/trees/main?recursive=1",
    {
      cache: "no-cache",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    } 
  );

  if (!res.ok) return undefined;

  const repoFileTree = await res.json();
  const fileArray = repoFileTree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts = [];

  for (const file of fileArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const cachePostsData = async () => {
  const posts = await getPostsMeta();
  return `export const cachePosts = ${JSON.stringify(posts)}`;
}
