"use client"

import PostCard from "./PostCard"
import Pagination from "./Pagination"
import { useState } from "react"

const PostList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className='flex-start flex-col mx-auto rounded-lg shadow-sm border border-1 bg-white px-16 py-8 gap-5 my-10 relative'>
      {currentPosts?.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          createAt={post.date}
          tags={post.tags}
        />
      ))}
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  )
}

export default PostList