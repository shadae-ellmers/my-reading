'use client'

import { ChangeEvent, useState } from 'react'
import { addNewBookData } from '../app/actions'
import { useUser } from '@auth0/nextjs-auth0/client'
import { Shelf } from '@prisma/client'

type ApiBookProps = {
  title: string
  author_name: object
  cover_edition_key: string
  shelves: Shelf[]
}

export function ApiBook({
  title,
  author_name,
  cover_edition_key,
  shelves,
}: ApiBookProps) {
  const { user } = useUser()
  const [shelf, setShelf] = useState('')
  const [radio, showRadio] = useState(false)
  const [readRating, setReadRating] = useState('no rating')

  function changeCategory(event: ChangeEvent<HTMLInputElement>) {
    setShelf(event.target.value)
  }

  const handleAdd = () => {
    const formattedBook = {
      title: title,
      author: author_name.toString(),
      shelf: shelf,
      cover: cover_edition_key,
      rating: readRating,
    }
    addNewBookData(formattedBook, user)
  }

  const handleClick = () => {
    showRadio(!radio)
  }

  const handleRating = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(readRating)
    setReadRating(event.target.value)
    console.log(readRating)
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
            {shelves.map((shelf) => (
              <>
                <input
                  type="radio"
                  id={shelf.title}
                  name="book-shelf"
                  value={shelf.title}
                  key={shelf.id}
                />
                {shelf.title}
              </>
            ))}
          </div>
          {shelf === 'read' ? (
            <div onChange={handleRating}>
              <form>
                <label htmlFor="rating">Add rating: </label>
                <input
                  type="text"
                  name="rating"
                  id="rating"
                  value={readRating}
                />
              </form>
            </div>
          ) : (
            <></>
          )}
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
