import Post from "@components/Post";
import { getPostByName, getPostsMeta } from "@lib/posts";
import 'highlight.js/styles/github-dark.css'

export const revalidate = 86400

export async function generateStaticParams() {
  const posts = await getPostsMeta() //deduped!

  if (!posts) return []

  return posts.map((post) => ({
      id: post.id
  }))
}

export async function generateMetadata({ params: { id } }) {

  const post = await getPostByName(`${id}.mdx`) //deduped!

  if (!post) {
      return {
          title: 'Post Not Found'
      }
  }

  return {
      title: post.meta.title,
  }
}

const PostRender = async ({ params }) => {
  const post = await getPostByName(params?.id + ".mdx");
  
  return (
    <Post
        title={post.meta.title}
        createAt={post.meta.date}
        content={post.content}
    />
  );
};

export default PostRender;
