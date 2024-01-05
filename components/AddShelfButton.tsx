'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { addShelfData } from '../app/actions'
import { useUser } from '@auth0/nextjs-auth0/client'

export function AddShelfButton() {
  const { user } = useUser()

  const [shelfForm, displayShelfForm] = useState(false)
  const [newShelf, setNewShelf] = useState('')

  const handleClick = () => {
    displayShelfForm(!shelfForm)
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    addShelfData(newShelf, user)
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewShelf(evt.target.value)
  }

  return (
    <div className="flex flex-row pt-6">
      <button
        onClick={handleClick}
        className="mx-2 my-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
      >
        Add Shelf
      </button>
      {shelfForm ? (
        <>
          <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="name" id="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={newShelf}
              onChange={handleChange}
              placeholder="For example... Favourites"
            />
            <button type="submit">Create shelf</button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
