'use client'

import { addNewBookData, deleteTbrBook } from '../app/actions'
import { useRouter } from 'next/navigation'

type TbrBookProps = {
  id: string
  title: string
  author: string
  cover: string
}

export function TbrBook({ id, title, author, cover }: TbrBookProps) {
  const router = useRouter()

  function handleMoveClick() {
    const bookObj = {
      id: id,
      title: title,
      author: author,
      category: 'currentread',
    }
    addNewBookData(bookObj)
    deleteTbrBook(id)
    handleRefresh()
  }

  function handleDeleteClick() {
    deleteTbrBook(id)
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
