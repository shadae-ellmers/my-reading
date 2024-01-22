'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { addShelfData } from '../app/actions'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/navigation'

export function AddShelfButton() {
  const { user } = useUser()
  const userId = user?.sub
  const [shelfForm, displayShelfForm] = useState(false)
  const [newShelf, setNewShelf] = useState('')
  const router = useRouter()
  const buttonTheme =
    'mx-2 my-2 text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen'

  const handleClick = () => {
    displayShelfForm(!shelfForm)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    if (typeof userId === 'string') {
      addShelfData(newShelf, userId)
      handleRefresh()
    } else {
      console.error('Invalid userId:', userId)
    }
  }

  function handleRefresh() {
    router.refresh()
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewShelf(evt.target.value)
  }

  return (
    <div className="flex flex-col pt-6">
      <div>
        <button
          onClick={handleClick}
          className={
            shelfForm ? `bg-myred ${buttonTheme}` : `bg-myblack ${buttonTheme}`
          }
        >
          Add Shelf
        </button>
      </div>
      {shelfForm ? (
        <div className="p-2 bg-mypink max-w-xs">
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="flex flex-col"
          >
            <label
              htmlFor="name"
              id="name"
              className="text-small flex flex-col justify-center lg:my-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={newShelf}
              onChange={handleChange}
              placeholder="For example... Favourites"
              className="max-w-xs mb-2 px-2 py-1"
            />
            <div>
              <button
                type="submit"
                className="mx-2 my-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
              >
                Create shelf
              </button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
