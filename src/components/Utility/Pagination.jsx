import ReactPaginate from 'react-paginate';

function Pagination() {
  const handlePageClick=()=>{

  }
  const pageCount =500;
  return (
    <div>
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابقه"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center p-3"}
        nextClassName={"page-item"}
        previousClassName={"page-item"}
        pageLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        activeClassName={"active"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
      />
    </div>
  )
}

export default Pagination
