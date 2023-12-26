'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client'

export default withPageAuthRequired(function UserProfile({ user }) {
  const { error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  const userImage = user?.picture || undefined
  const userName = user?.name || undefined

  return (
    user && (
      <div>
        <img src={userImage} alt={userName} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  )
})
