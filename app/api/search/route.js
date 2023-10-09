import { NextRequest, NextResponse } from "next/server";
import { getPostsMeta } from "@lib/posts";

export const GET = async (req, { params }) => {
    const searchValue = new NextRequest(req).nextUrl.searchParams.get('value');

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

    const searchPosts = posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    return new Response(JSON.stringify(searchPosts), {status: 200})
}