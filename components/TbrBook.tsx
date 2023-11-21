'use client'

import { addNewBookData, deleteTbrBook } from '../app/actions'
import { useRouter } from 'next/navigation'

type TbrBookProps = {
  id: string
  title: string
  author: string
}

export function TbrBook({ id, title, author }: TbrBookProps) {
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
    <div className="flex flex-row py-3">
      <div className="flex flex-col justify-evenly">
        <h3 className="font-extrabold">{title}</h3>
        <p className="text-xl">{author}</p>
        <div className="flex flex-row py-3">
          <a
            href="#_"
            onClick={handleMoveClick}
            className="relative inline-block text-lg group mr-1"
          >
            Currently Reading
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
