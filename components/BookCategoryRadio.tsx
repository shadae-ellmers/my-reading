'use client'

import { ChangeEvent, useState } from 'react'

export function BookCategoryRadio() {
  const [category, setCategory] = useState('')

  function changeCategory(event: ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value)
  }

  return (
    <div>
      <div onChange={changeCategory}>
        <input
          type="radio"
          id="currentread"
          name="book-category"
          value="currentread"
        />{' '}
        Currently Reading
      </div>
      <div onChange={changeCategory}>
        <input type="radio" id="tbr" name="book-category" value="tbr" /> To Be
        Read
      </div>
      <div onChange={changeCategory}>
        <input type="radio" id="read" name="book-category" value="read" /> Read
      </div>
      {category === 'currentread' ? (
        <div>
          <form>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" />
            <label htmlFor="author">Author: </label>
            <input type="text" id="author" name="author" />
          </form>
          <button type="submit">Submit</button>
        </div>
      ) : (
        <></>
      )}
      {category === 'tbr' ? (
        <div>
          <form>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" />
            <label htmlFor="author">Author: </label>
            <input type="text" id="author" name="author" />
          </form>
          <button type="submit">Submit</button>
        </div>
      ) : (
        <></>
      )}
      {category === 'read' ? (
        <div>
          <form>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" />
            <label htmlFor="author">Author: </label>
            <input type="text" id="author" name="author" />
            <label htmlFor="rating">Rating: </label>
            <input type="text" id="rating" name="rating" />
          </form>
          <button type="submit">Submit</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
