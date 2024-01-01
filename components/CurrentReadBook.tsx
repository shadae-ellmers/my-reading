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
    <div className="flex flex-col justify-start w-1/3">
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
          <h3 className="text-large">{title}</h3>
          <h4 className="text-medium">{author}</h4>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          onClick={handleMoveClick}
          className="my-2 py-2 px-8 mr-0.5 text-small w-fit shadow-xl text-mywhite bg-myred border-2 border-myred rounded-l-3xl hover:bg-mywhite hover:text-myred"
        >
          Finished Reading
        </button>
        <button
          onClick={handleDeleteClick}
          className="my-2 py-2 px-8 mml-0.5 text-small w-fit shadow-xl text-mywhite bg-myred border-2 border-myred rounded-r-3xl hover:bg-mywhite hover:text-myred"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
