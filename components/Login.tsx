'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

export default function Login() {
  const { user, error, isLoading } = useUser()

  return (
    <section className="flex items-center">
      {user ? (
        <div className="flex flex-row">
          <a
            className="text-medium mx-2.5 rounded-3xl py-1.5 px-5 flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/shelves"
          >
            Shelves
          </a>
          <a
            className="text-medium mx-2.5 rounded-3xl py-1.5 px-5 flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/stats"
          >
            Stats
          </a>
          <a
            className="text-medium mx-2.5 rounded-3xl py-1.5 px-5 flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/api/auth/logout"
          >
            Logout
          </a>
        </div>
      ) : (
        <div className="flex flex-row">
          <a
            className="text-medium mx-2.5 rounded-3xl py-1.5 px-5 flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/api/auth/login"
          >
            Login
          </a>
          <a
            className="text-medium mx-2.5 rounded-3xl py-1.5 px-5 flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/api/auth/signup"
          >
            Sign up
          </a>
        </div>
      )}
    </section>
  )
}
