import { NextResponse } from "next/server";
import { getPostsMeta } from "@lib/posts";

export const GET = async () => {
    const posts = await getPostsMeta();
    
    if (!posts) {
        return new NextResponse(JSON.stringify({ message: 'Server error' }), {
            status: 500,
            statusText: 'Internal server error',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const category = Array.from(new Set(posts.map((post) => post.tags).flat()));
    return new Response(JSON.stringify(category), {status: 200})
}