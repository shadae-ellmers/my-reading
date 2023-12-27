'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import UserProfile from './UserProfile'

export default function Login() {
  const { user, error, isLoading } = useUser()

  return (
    <section className="flex items-center">
      {user ? (
        <div>
          <a
            className="pt-4 pb-1 px-8 text-3xl font-semibold flex items-center hover:text-mypink"
            href="/profile"
          >
            Profile
          </a>
          <a
            className="pt-1 pb-4 px-8 text-3xl font-semibold flex items-center hover:text-mypink"
            href="/api/auth/logout"
          >
            Logout
          </a>
        </div>
      ) : (
        <div>
          <a
            className="py-4 px-8 text-3xl font-semibold flex items-center hover:text-mypink"
            href="/api/auth/login"
          >
            Login
          </a>
        </div>
      )}
    </section>
  )
}
