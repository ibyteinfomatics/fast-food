import React from 'react';

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
        {pageNumbers.map(number => (
          <button key={number} className='page-item' style={{'padding': '10px'}} onClick={() =>paginate(number)}>
            
              {number}
          </button>
        ))}
    </>
  );
};

export default Paginations;