import PostList from '@components/PostList';
import { getPostsMeta } from '@lib/posts';
import React from 'react'

export const revalidate = 86400

const Home  = async () => {
  const postList = await getPostsMeta();

  return (
    <section className='w-full flex-center flex-col'>
      <p className='head_text text-center'>Welcome to my personal blog</p>
      <p className='intro'>Let's share knowledge and talk together</p>

      <PostList posts={postList}/>
    </section>
  )
}

export default Home;