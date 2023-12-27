'use client'

import { addNewBookData, deleteCurrentBook } from '../app/actions'
import { useRouter } from 'next/navigation'

type CurrentReadBookProps = {
  id: string
  title: string
  author: string
  cover: string
}

export function CurrentReadBook({
  id,
  title,
  author,
  cover,
}: CurrentReadBookProps) {
  const router = useRouter()

  function handleMoveClick() {
    const bookObj = {
      id: id,
      title: title,
      author: author,
      rating: 0,
      category: 'read',
    }
    addNewBookData(bookObj)
    deleteCurrentBook(id)
    handleRefresh()
  }

  function handleDeleteClick() {
    deleteCurrentBook(id)
    handleRefresh()
  }

  function handleRefresh() {
    router.refresh()
  }

  return (
    <div className="flex flex-row py-4 bg-mywhite bg-opacity-20 mr-8 mb-8 max-w-lg px-8">
      <div className="flex flex-col items-center">
        <img
          src={
            cover
              ? `https://covers.openlibrary.org/b/OLID/` + cover + `.jpg`
              : 'cover-placeholder.png'
          }
          alt="book cover"
          width="250"
          className="pr-6 h-56"
        />
      </div>
      <div className="flex flex-col max-w-2xl justify-between">
        <div>
          <h2 className="text-2xl my-1">{title}</h2>
          <p className="text-xl my-1">{author}</p>
        </div>
        <div>
          <button
            onClick={handleMoveClick}
            className="my-1 py-2 px-8 text-lg w-fit text-mywhite bg-myred rounded-full hover:bg-mywhite hover:text-myred"
          >
            Finished Reading
          </button>
          <button
            onClick={handleDeleteClick}
            className="my-1 py-2 px-8 text-lg w-fit text-mywhite bg-myred rounded-full hover:bg-mywhite hover:text-myred"
          >
            Remove Book
          </button>
        </div>
      </div>
    </div>
  )
}
