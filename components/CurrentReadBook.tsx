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
    <div className="flex flex-row py-4">
      <div className="flex flex-col items-center">
        <img
          src={
            cover
              ? `https://covers.openlibrary.org/b/OLID/` + cover + `.jpg`
              : 'cover-placeholder.png'
          }
          alt="book cover"
          width="200"
          className="pt-1 px-4 pb-4"
        />
        <button
          onClick={handleMoveClick}
          className="my-1 py-2 px-8 w-fit text-mywhite bg-myred rounded-full"
        >
          Finished Reading
        </button>
        <button
          onClick={handleDeleteClick}
          className="my-1 py-2 px-8 w-fit text-mywhite bg-myred rounded-full"
        >
          Remove Book
        </button>
      </div>
      <div className="flex flex-col max-w-2xl">
        <h2 className="text-3xl my-1">{title}</h2>
        <p className="text-2xl my-1">{author}</p>
      </div>
    </div>
  )
}
