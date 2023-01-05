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
        pageRangeDisplayed={4}
        pageCount={Math.ceil(pizzasCount / 4)}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
