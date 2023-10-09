const Post = ({ title, createAt, content }) => {
  return (
    <section className='flex-start flex-col max-w-5xl mx-auto rounded-lg shadow-sm border border-1 bg-white'>
      {/* <div className="w-full h-60 relative">
        <Image src={image} fill objectFit="fill" className="rounded-t-lg"/>
      </div> */}
      <div className="px-16 py-8 my-5">
        <p className='text-5xl font-roboto font-bold mb-3'>{title}</p>
        <p className='text-md italic font-roboto'> published on {createAt}</p>
        <div className=' mt-8 text-xl font-roboto'>{content}</div>
      </div>
    </section>
  )
}

export default Post