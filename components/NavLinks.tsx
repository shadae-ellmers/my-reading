'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

export default function NavLinks() {
  const { user, error, isLoading } = useUser()

  return (
    <section className="flex items-center pb-5 lg:pb-0 sm:px-2">
      {user ? (
        <div className="flex flex-wrap flex-row justify-center lg:flex-nowrap">
          <a
            className="text-medium mx-2.5 rounded-3xl py-2 px-5 my-2 justify-center flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/"
          >
            Home
          </a>
          <a
            className="text-medium mx-2.5 rounded-3xl py-2 px-5 my-2 justify-center flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/shelves"
          >
            Shelves
          </a>
          <a
            className="text-medium mx-2.5 rounded-3xl py-2 px-5 my-2 justify-center flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/stats"
          >
            Stats
          </a>
          <a
            className="text-medium mx-2.5 rounded-3xl py-2 px-5 my-2 justify-center flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/api/auth/logout"
          >
            Logout
          </a>
        </div>
      ) : (
        <div className="flex flex-wrap flex-row justify-center lg:flex-nowrap">
          <a
            className="text-medium mx-2.5 rounded-3xl py-2 px-5 my-2 justify-center flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/"
          >
            Home
          </a>
          <a
            className="text-medium mx-2.5 rounded-3xl py-2 px-5 my-2 justify-center flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/api/auth/login"
          >
            Login
          </a>
          <a
            className="text-medium mx-2.5 rounded-3xl py-2 px-5 my-2 justify-center flex items-center hover:text-mywhite hover:bg-mygreen bg-mywhite"
            href="/api/auth/signup"
          >
            Sign up
          </a>
        </div>
      )}
    </section>
  )
}
