import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const secret = new NextRequest(req).nextUrl.searchParams.get('secret')

    if (secret !== process.env.MY_SECRET_TOKEN) {
        return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
            status: 401,
            statusText: 'Unauthorized',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const path = new NextRequest(req).nextUrl.searchParams.get('path') || '/'

    revalidatePath(path)

    return NextResponse.json({ revalidated: true })
}