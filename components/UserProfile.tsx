'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

export default async function UserProfile() {
  const { user, error, isLoading } = useUser()

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
}
