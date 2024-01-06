import { AddBookButton } from '../../components/AddBookButton'
import { SingleBook } from '../../components/SingleBook'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'
import ShelvesButton from '../../components/ShelvesButton'
import prisma from '../../prisma/client'
import { AddShelfButton } from '../../components/AddShelfButton'

export default withPageAuthRequired(
  async function Shelves() {
    const session = await getSession()
    const user = session?.user

    const allShelves = await prisma.shelf.findMany({
      where: {
        auth_id: user?.sub,
      },
    })

    const allBooks = await prisma.book.findMany({
      where: {
        auth_id: user?.sub,
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
              Shelves
            </h1>
          </div>
        </div>

        {/* page content */}
        <div className="py-8 px-40 w-full">
          <ShelvesButton />
          {/* breadcrumbs */}
          <div className="text-small flex flex-row">
            <a href="/" className="hover:underline hover:underline-offset-4">
              Home
            </a>
            <p className="px-2">&gt;</p>
            <a href="#" className="hover:underline hover:underline-offset-4">
              Shelves
            </a>
          </div>

          {/* shelves filter */}
          <AddShelfButton />
          <div className="text-center">
            <div className="flex flex-row flex-wrap pt-6 pb-6">
              <a
                href="#"
                className="m-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
              >
                All
              </a>
              {allShelves?.map((shelf) => (
                <div key={shelf.id}>
                  <a
                    href="#"
                    className="m-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
                  >
                    {shelf.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* content divider */}
          <div className="w-full h-0.5 bg-myblack opacity-10"></div>

          {/* books */}
          <div className="">
            <div className="flex flex-row">
              <AddBookButton />
              <p className="flex flex-col justify-center pt-6 pl-5 pr-1 text-small">
                Sort by:{' '}
              </p>
              <p className="flex flex-col justify-center pt-6 pl-1 pr-5 text-small">
                Default
              </p>
            </div>
            <div className="flex flex-row flex-wrap">
              {allBooks?.map((book) => (
                <SingleBook key={book.id} {...book} />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  },
  { returnTo: '/api/auth/login' }
)
