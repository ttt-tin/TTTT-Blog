const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='py-2 w-full'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'>
            {" "}
            {currentPage * postsPerPage - 4}{" "}
          </span>
          to
          <span className='font-medium'> {(currentPage * postsPerPage > totalPosts) ? totalPosts : currentPage * postsPerPage} </span>
          of
          <span className='font-medium'> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className='block mt-2'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            {pageNumbers.map((number) => (
              <a
                key={number}
                onClick={() => {
                  paginate(number);
                }}
                href='#'
                className={
                  currentPage === number
                    ? "bg-blue border-black text-back hover:bg-slate-300 relative inline-flex items-center px-2 py-1 border text-sm font-medium rounded-sm mr-2"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-slate-300 relative inline-flex items-center px-2 py-1 border text-sm font-medium rounded-sm mr-2"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;