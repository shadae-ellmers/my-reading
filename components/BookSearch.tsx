'use client'

import { useState } from 'react'

export function BookSearch() {
  const [bookSearch, setBookSearch] = useState('' as string)

  const handleSubmit = () => {
    return 'hi'
  }

  const handleChange = () => {
    return 'hello'
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
    </section>
  )
}
