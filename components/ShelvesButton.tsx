'use client'

import { addUser } from '../app/actions'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function ShelvesButton() {
  const { user } = useUser()
  const userId = user?.sub

  const addUserToDb = () => {
    if (typeof userId === 'string') {
      addUser(userId)
    } else {
      console.error('Invalid userId:', userId)
    }
  }

  return (
    <section>
      <button onClick={addUserToDb}>click me</button>
    </section>
  )
}
