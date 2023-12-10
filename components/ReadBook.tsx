'use client'

import { deleteReadBook } from '../app/actions'
import { useRouter } from 'next/navigation'

type ReadBookProps = {
  id: string
  title: string
  author: string
  rating: number
  cover: string
}

export function ReadBook({ id, title, author, rating, cover }: ReadBookProps) {
  const router = useRouter()

  function handleClick() {
    deleteReadBook(id)
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
        <button className="my-1 py-2 px-8 w-fit text-mywhite bg-myred rounded-full">
          Update Rating
        </button>
        <button
          onClick={handleClick}
          className="my-1 py-2 px-8 w-fit text-mywhite bg-myred rounded-full"
        >
          Remove Book
        </button>
      </div>
      <div className="flex flex-col max-w-2xl">
        <h2 className="text-3xl my-1">{title}</h2>
        <p className="text-2xl my-1">{author}</p>
        <p className="text-2xl my-1">Rating: {rating}/10</p>
      </div>
    </div>
  )
}
