'use client'

import { addUser } from '../app/actions'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function ShelvesButton() {
  const { user, error, isLoading } = useUser()

  const addUserToDb = () => {
    addUser(user)
  }

  return (
    <section>
      <button onClick={addUserToDb}>click me</button>
    </section>
  )
}
