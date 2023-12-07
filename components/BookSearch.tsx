'use client'

import { ChangeEvent, FormEvent, use, useState } from 'react'
import { getSearchResults } from '../app/search/actions'

export function BookSearch() {
  const [bookSearch, setBookSearch] = useState('' as string)
  const [searchResults, setSearchResults] = useState([] as any)

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
            <div key={book.key} className="py-4 flex flex-row">
              {book.cover_edition_key ? (
                <img
                  src={
                    `https://covers.openlibrary.org/b/OLID/` +
                    book.cover_edition_key +
                    `.jpg`
                  }
                  alt="book cover"
                  width="200"
                  className="py-1 px-4"
                />
              ) : (
                <div>
                  <img
                    src="cover-placeholder.png"
                    alt="book cover placeholder"
                    width="200"
                    className="py-1 px-4"
                  />
                </div>
              )}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl my-1">{book.title}</h2>
                  <p className="text-xl my-1">{book.author_name[0]}</p>
                </div>
                <button className="my-1 py-2 px-8 w-fit text-mywhite bg-myred rounded-full">
                  Add book
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  )
}
