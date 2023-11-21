'use client'

import { addNewBookData, deleteCurrentBook } from '../app/actions'
import { useRouter } from 'next/navigation'

type CurrentReadBookProps = {
  id: string
  title: string
  author: string
}

export function CurrentReadBook({ id, title, author }: CurrentReadBookProps) {
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
    <div className="flex flex-row py-3">
      <div className="flex flex-col justify-evenly">
        <p className="font-extrabold">{title}</p>
        <p className="text-xl">{author}</p>
        <div className="flex flex-row py-3">
          <a
            href="#_"
            onClick={handleMoveClick}
            className="relative inline-block text-lg group mr-1"
          >
            Finished Reading
          </a>
          <a
            href="#_"
            onClick={handleDeleteClick}
            className="relative inline-block text-lg group ml-1"
          >
            Remove
          </a>
        </div>
      </div>
    </div>
  )
}
