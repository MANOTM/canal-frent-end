"use client"

import { useState, useEffect } from "react"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import './pagination.css'

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove the '#'
      const pageFromHash = hash.startsWith("page-") ? Number.parseInt(hash.slice(5)) : 1
      if (pageFromHash >= 1 && pageFromHash <= totalPages) {
        setCurrentPage(pageFromHash)
      }
    }

    // Set initial page from hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      window.location.hash = `#page-${page}`
      setCurrentPage(page)
    }
  }

  return (
    <nav className="pagination">
      <button className="pagination-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        <MdChevronLeft className="w-4 h-4" />
      </button>
      <button className={`pagination-btn ${currentPage === 1 ? "active" : ""}`} onClick={() => goToPage(1)}>
        1
      </button>
      <button className={`pagination-btn ${currentPage === 2 ? "active" : ""}`} onClick={() => goToPage(2)}>
        2
      </button>
      <button className={`pagination-btn ${currentPage === 3 ? "active" : ""}`} onClick={() => goToPage(3)}>
        3
      </button>
      <button
        className="pagination-btn"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdChevronRight className="w-4 h-4" />
      </button>
    </nav>
  )
}
