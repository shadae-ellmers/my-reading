'use client'

import { ChangeEvent, FormEvent, use, useState } from 'react'
import { getSearchResults } from '../app/search/actions'
import { ApiBook } from './ApiBook'

export function BookSearch() {
  const [bookSearch, setBookSearch] = useState('' as string)
  const [searchResults, setSearchResults] = useState([] as any)

  const searchLength = searchResults.length

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
    <section>
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
        <input
          className="mx-4 py-2 px-8 w-fit text-mywhite bg-myred rounded-full"
          type="submit"
        />
      </form>
      {searchResults ? (
        <div className="py-4">
          {searchResults.map((book: any) => (
            <ApiBook key={book.key} {...book} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  )
}
