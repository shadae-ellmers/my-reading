'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { addNewBookData } from '../app/actions'

export function BookCategoryRadio() {
  const [category, setCategory] = useState('')
  const [newBook, setNewBook] = useState({
    category: '',
    title: '',
    author: '',
    rating: '',
  })

  function changeCategory(event: ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value)
    setNewBook({ ...newBook, category: event.target.value })
  }

  function addNewBook() {
    addNewBookData(newBook)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewBook({ ...newBook, [name]: value })
  }

  return (
    <div>
      <div onChange={changeCategory}>
        <input
          type="radio"
          id="currentread"
          name="book-category"
          value="currentread"
        />
        Currently Reading
        <input type="radio" id="tbr" name="book-category" value="tbr" /> To Be
        Read
        <input type="radio" id="read" name="book-category" value="read" /> Read
      </div>
      {category === 'currentread' ||
      category === 'tbr' ||
      category === 'read' ? (
        <div>
          <form action={addNewBook}>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            {category === 'read' && (
              <>
                <label htmlFor="rating">Rating: </label>
                <input
                  type="text"
                  id="rating"
                  name="rating"
                  value={newBook.rating}
                  onChange={handleInputChange}
                />
              </>
            )}
          </form>
          <button onClick={addNewBook} type="submit">
            Submit
          </button>
        </div>
      ) : null}
    </div>
  )
}
