import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import './pagination.css'

export default function Pagination({ totalPages = 1 ,currentPage,setCurrentPage}) {

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      window.location.hash = `#page-${page}`;
      window.scrollTo(0, 0);
      setCurrentPage(page);
    }
  };

  return (
    <nav className="pagination flex gap-2 items-center">
      {/* Prev button */}
      <button
        className="pagination-btn"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdChevronLeft className="w-4 h-4" />
      </button>

      {/* Page number buttons */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            className={`pagination-btn ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        );
      })}

      {/* Next button */}
      <button
        className="pagination-btn"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}