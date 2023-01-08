import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import '../../scss/components/pagination.scss'

function Pagination({ currentPage, onChangePage }) {
  const pizzasCount = useSelector(
    (state) => state.pizzasSlice.pizzas.length - 1
  )

  return (
    <>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(page) => onChangePage(page.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={pizzasCount}
        previousLabel="<"
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
