import PostList from "@components/PostList";
import { getPostsMeta } from "@lib/posts";
import Link from "next/link";
export const revalidate = 86400

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }) {

    return {
        title: `Posts about ${tag}`
    }
}

export default async function TagPostList({ params: { tag } }) {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return <p className="mt-10 text-center">Sorry, no posts available.</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <p className="mt-10">Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <>
            <p className="text-3xl mt-4 mb-0">Results for: #{tag}</p>
            <section className='w-full flex-center flex-col'>
                <PostList posts={tagPosts} />
            </section>
        </>
    )
}