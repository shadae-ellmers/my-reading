'use client'

// Pagination.tsx

import React from 'react'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onPrevPage: () => void
  onNextPage: () => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onPrevPage,
  onNextPage,
}: PaginationProps) {
  const generatePagination = () => {
    const maxPagesToShow = 5
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

    // Calculate the start and end indices to show a limited number of pages
    let start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    let end = start + maxPagesToShow - 1

    if (end > totalPages) {
      end = totalPages
      start = Math.max(1, end - maxPagesToShow + 1)
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index)
  }

  return (
    <div className="flex justify-center my-4">
      <button
        className="mx-2 py-2 px-6 bg-mywhite text-myblack rounded-full"
        onClick={onPrevPage}
      >
        Previous
      </button>
      {generatePagination().map((page) => (
        <button
          key={page}
          className={`mx-2 py-2 px-6 ${
            page === currentPage
              ? 'bg-myred text-mywhite'
              : 'bg-mywhite text-myblack'
          } rounded-full`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="mx-2 py-2 px-6 bg-mywhite text-myblack rounded-full"
        onClick={onNextPage}
      >
        Next
      </button>
    </div>
  )
}
