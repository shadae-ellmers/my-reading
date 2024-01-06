'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { getSearchResults } from '../app/actions'
import { ApiBook } from './ApiBook'
import { Pagination } from './Pagination'
import { Shelf } from '@prisma/client'

interface BookSearchProps {
  shelves: Shelf[]
}

export function BookSearch({ shelves }: BookSearchProps) {
  const [bookSearch, setBookSearch] = useState('' as string)
  const [searchResults, setSearchResults] = useState([] as any)
  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 5

  const generatePagination = () => {
    const searchLength = searchResults.length
    const totalPages = Math.ceil(searchLength / resultsPerPage)
    return totalPages
  }

  const paginatedResults = () => {
    const start = (currentPage - 1) * resultsPerPage
    const end = start + resultsPerPage
    return searchResults.slice(start, end)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleNextPage = () => {
    const totalPages = Math.ceil(searchResults.length / resultsPerPage)
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    )
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage))
  }

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()

    try {
      const results = await getSearchResults(bookSearch)
      setSearchResults(results.docs)
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setBookSearch(evt.target.value)
  }

  return (
    <section className="flex flex-col">
      <div className="flex-grow">
        {/* search form */}
        <form action="submit" onSubmit={handleSubmit}>
          <label htmlFor="book" className="text-myblack text-3xl mx-4">
            Search:
          </label>
          <input
            type="text"
            id="book"
            name="book"
            placeholder="Type a book title"
            value={bookSearch}
            onChange={handleChange}
            className="bg-mywhite text-myblack py-2 px-2 mx-4"
          />
          <button
            className="mx-4 py-2 px-8 w-fit text-mywhite bg-myred rounded-full"
            type="submit"
          >
            Find book
          </button>
        </form>

        {/* search results */}
        {searchResults.length > 0 && (
          <div className="py-4">
            {paginatedResults().map((book: any) => (
              <ApiBook key={book.key} {...book} shelves={shelves} />
            ))}
          </div>
        )}

        {/* results pagination */}
        {searchResults.length > resultsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={generatePagination()}
            onPageChange={handlePageChange}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
          />
        )}
      </div>
    </section>
  )
}
