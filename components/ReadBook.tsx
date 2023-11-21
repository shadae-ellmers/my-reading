'use client'

import { deleteReadBook } from '../app/actions'
import { useRouter } from 'next/navigation'

type ReadBookProps = {
  id: string
  title: string
  author: string
  rating: number
}

export function ReadBook({ id, title, author, rating }: ReadBookProps) {
  const router = useRouter()

  function handleClick() {
    deleteReadBook(id)
    handleRefresh()
  }

  function handleRefresh() {
    router.refresh()
  }

  return (
    <div className="flex flex-row py-3">
      <div className="flex flex-col justify-evenly">
        <h3 className="font-extrabold">{title}</h3>
        <p className="text-xl">{author}</p>
        <p className="text-xl">{rating}</p>
        <div className="flex flex-row py-3">
          <a href="#_" className="relative inline-block text-lg group mr-1">
            Update Rating
          </a>
          <a
            href="#_"
            onClick={handleClick}
            className="relative inline-block text-lg group ml-1"
          >
            Remove
          </a>
        </div>
      </div>
    </div>
  )
}
