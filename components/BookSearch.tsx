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
        <label htmlFor="book">Search book: </label>
        <input
          type="text"
          id="book"
          name="book"
          value={bookSearch}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
      {searchResults ? (
        <div>
          {searchResults.map((book: any) => (
            <div key={book.key}>
              <h2 className="font-extrabold">{book.title}</h2>
              <p>{book.author_name[0]}</p>
              {book.cover_edition_key ? (
                <img
                  src={
                    `https://covers.openlibrary.org/b/OLID/` +
                    book.cover_edition_key +
                    `.jpg`
                  }
                  alt="book cover"
                  width="200"
                />
              ) : (
                <></>
                // enter default cover here
              )}
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  )
}
