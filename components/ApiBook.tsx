'use client'

import { ChangeEvent, useState } from 'react'
import { addNewBookData } from '../app/actions'

type ApiBookProps = {
  title: string
  author_name: object
  cover_edition_key: string
}

export function ApiBook({
  title,
  author_name,
  cover_edition_key,
}: ApiBookProps) {
  const [category, setCategory] = useState('')
  const [radio, showRadio] = useState(false)

  function changeCategory(event: ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value)
  }

  const handleAdd = () => {
    const formattedBook = {
      title: title,
      author: author_name.toString(),
      category: category,
      cover: cover_edition_key,
    }
    addNewBookData(formattedBook)
  }

  const handleClick = () => {
    showRadio(!radio)
  }

  return (
    <section>
      <div className="py-4 flex flex-row">
        <div className="flex flex-col items-center">
          <img
            src={
              cover_edition_key
                ? `https://covers.openlibrary.org/b/OLID/` +
                  cover_edition_key +
                  `.jpg`
                : 'cover-placeholder.png'
            }
            alt="book cover"
            width="200"
            className="pt-1 px-4 pb-4"
          />
          <button
            onClick={handleClick}
            className="my-1 py-2 px-8 w-fit text-mywhite bg-myred rounded-full"
          >
            Add book to library
          </button>
        </div>
        <div className="flex flex-col max-w-2xl">
          <h2 className="text-3xl my-1">{title}</h2>
          {Array.isArray(author_name) && author_name.length > 0 && (
            <p className="text-2xl my-1">{author_name[0]}</p>
          )}
        </div>
      </div>
      {radio ? (
        <>
          <div onChange={changeCategory}>
            <input
              type="radio"
              id="currentread"
              name="book-category"
              value="currentread"
            />
            Currently Reading
            <input type="radio" id="tbr" name="book-category" value="tbr" /> To
            Be Read
            <input
              type="radio"
              id="read"
              name="book-category"
              value="read"
            />{' '}
            Read
          </div>
          <div>
            <button onClick={handleAdd} type="submit">
              Submit
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  )
}
