import ReactPaginate from 'react-paginate'
import '../../scss/components/pagination.scss'

function Pagination({ pizzasCount, onChangePage }) {
  return (
    <>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(page) => onChangePage(page.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={Math.ceil(pizzasCount / 3)}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
