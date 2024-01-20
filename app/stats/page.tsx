import { AddBookButton } from '../../components/AddBookButton'
import { SingleBook } from '../../components/SingleBook'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import prisma from '../../prisma/client'
import { AddShelfButton } from '../../components/AddShelfButton'

export default withPageAuthRequired(
  async function Statistics() {
    const session = await getSession()
    const user = session?.user

    const allBooks = await prisma.book.findMany({
      where: {
        user_id: user?.sub,
      },
    })

    return (
      <section className="min-h-screen">
        {/* page banner */}
        <div className="relative bg-myblack">
          <img
            src="6870041.jpg"
            alt="apartment animation at night"
            className="w-full max-h-60 object-cover opacity-50"
          ></img>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3">
            <h1 className="text-mywhite text-extralg bg-myblack bg-opacity-80 px-8 py-3 rounded-3xl text-center">
              Stats
            </h1>
          </div>
        </div>

        {/* page content */}
        <div className="py-8 px-40 w-full">
          {/* breadcrumbs */}
          <div className="text-small flex flex-row">
            <a href="/" className="hover:underline hover:underline-offset-4">
              Home
            </a>
            <p className="px-2">&gt;</p>
            <a href="#" className="hover:underline hover:underline-offset-4">
              Stats
            </a>
          </div>
        </div>
      </section>
    )
  },
  { returnTo: '/api/auth/login' }
)
