'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { addNewBookData, deleteBook, moveBookData } from '../app/actions'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { Shelf } from '@prisma/client'

type SingleBookProps = {
  id: string
  title: string
  author: string
  cover: string
  shelfId: string
  shelves: Shelf[]
}

export function SingleBook({
  id,
  title,
  author,
  cover,
  shelfId,
  shelves,
}: SingleBookProps) {
  const { user } = useUser()
  const userId = user?.sub
  const router = useRouter()
  const [showShelves, setShowShelves] = useState(false)
  const [shelfChoice, setShelfChoice] = useState('')

  function manageMove() {
    setShowShelves(!showShelves)
  }

  function changeCategory(event: ChangeEvent<HTMLInputElement>) {
    setShelfChoice(event.target.value)
  }

  function handleMoveClick() {
    const bookObj = {
      id: id,
      title: title,
      author: author,
      cover: cover,
      shelf: shelfChoice,
      rating: 'no rating',
    }
    if (typeof userId === 'string') {
      moveBookData(bookObj, userId, shelfChoice)
      deleteBook(id, userId, shelfId)
    }
    handleRefresh()
  }

  function handleDeleteClick() {
    if (typeof userId === 'string') {
      deleteBook(id, userId, shelfId)
    } else {
      console.error('Invalid userId:', userId)
    }
    handleRefresh()
  }

  function handleRefresh() {
    router.refresh()
  }

  return (
    <div className="flex flex-col justify-start max-w-xs sm:w-1/2 xl:w-1/3">
      <div className="bg-mygreen flex flex-row rounded-3xl mx-4 mt-8 mb-2 shadow-xl">
        <img
          src={
            cover
              ? `https://covers.openlibrary.org/b/OLID/` + cover + `.jpg`
              : 'cover-placeholder.png'
          }
          alt="book cover"
          className="w-2/5 rounded-l-3xl h-56 object-cover"
        />
        <div className="w-3/5 px-5 text-mywhite text-left flex flex-col justify-end pb-5">
          <h3 className="text-medium">{title}</h3>
          <h4 className="text-small">{author}</h4>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          onClick={manageMove}
          className="my-2 py-2 px-8 mr-0.5 text-small w-fit shadow-xl text-mywhite bg-myred border-2 border-myred rounded-l-3xl hover:bg-mywhite hover:text-myred"
        >
          Move
        </button>
        <button
          onClick={handleDeleteClick}
          className="my-2 py-2 px-8 mml-0.5 text-small w-fit shadow-xl text-mywhite bg-myred border-2 border-myred rounded-r-3xl hover:bg-mywhite hover:text-myred"
        >
          Remove
        </button>
      </div>
      {showShelves === true ? (
        <>
          <p>Move to: </p>
          <div onChange={changeCategory}>
            {shelves.map((shelf) => (
              <div key={shelf.id}>
                <input
                  type="radio"
                  id={shelf.title}
                  name="book-shelf"
                  value={shelf.title}
                  key={shelf.id}
                />
                {shelf.title}
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleMoveClick} type="submit">
              Submit
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
