import ReactPaginate from 'react-paginate'
import '../../scss/components/pagination.scss'

function Pagination() {
  return (
    <>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => console.log(e)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
