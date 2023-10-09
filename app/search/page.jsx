'use client'

import { useSearchParams } from "next/navigation"
import PostList from "@components/PostList";
import { useEffect, useState } from "react";

export const revalidate = 86400

export function generateMetadata({ params }) {
    const searchParams = useSearchParams();
    const searchValue = searchParams.get("value");

    return {
        title: `Search results for ${searchValue}`
    }
}

const searchPage = ({ params }) => {
    const searchParams = useSearchParams();
    const searchValue = searchParams.get("value");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch(`/api/search?value=${searchValue}`);
            const searchPosts = await res.json();

            setPosts(searchPosts);
        }
        if (searchValue) getPosts();
    }, [searchValue]);
    
    return (
        <>
            <p className="text-3xl mt-4 mb-0">Search results for: {searchValue}</p>
            <section className='w-full flex-center flex-col'>
                <PostList posts={posts} />
            </section>
        </>
    )
}

export default searchPage