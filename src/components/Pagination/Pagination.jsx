import ReactPaginate from 'react-paginate'
import '../../scss/components/pagination.scss'

function Pagination({ currentPage, pizzasCount, onChangePage }) {

  return (
    <>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(page) => onChangePage(page.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={Math.floor(pizzasCount / 4) + 1}
        previousLabel="<"
				forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
