import { getSession } from '@auth0/nextjs-auth0'
import { AddShelfButton } from '../../../components/AddShelfButton'
import prisma from '../../../prisma/client'
import { AddBookButton } from '../../../components/AddBookButton'
import { SingleBook } from '../../../components/SingleBook'

export default async function Page({ params }: { params: { slug: string } }) {
  const session = await getSession()
  const user = session?.user

  const shelfBtnTheming =
    'm-2 text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen'

  const relevantShelf = await prisma.shelf.findFirst({
    where: {
      title: params.slug,
      user_id: user?.sub,
    },
  })

  const allShelves = await prisma.shelf.findMany({
    where: {
      user_id: user?.sub,
    },
  })

  const relevantBooks = await prisma.book.findMany({
    where: {
      user_id: user?.sub,
      shelfId: relevantShelf?.id,
    },
  })

  return (
    <section className="min-h-screen">
      {/* page banner */}
      <div className="relative bg-myblack">
        <img
          src="../6870041.jpg"
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
        {/* breadcrumbs */}
        <div className="text-small flex flex-row">
          <a href="/" className="hover:underline hover:underline-offset-4">
            Home
          </a>
          <p className="px-2">&gt;</p>
          <a href="#" className="hover:underline hover:underline-offset-4">
            Shelves
          </a>
          <p className="px-2">&gt;</p>
          <a href="#" className="hover:underline hover:underline-offset-4">
            {params.slug}
          </a>
        </div>

        {/* shelves filter */}
        <AddShelfButton />
        <div className="text-center">
          <div className="flex flex-row flex-wrap pt-6 pb-6">
            <a
              href="/shelves"
              className="m-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
            >
              All
            </a>
            {allShelves ? (
              <>
                {allShelves?.map((shelf) => (
                  <div key={shelf.id} className="flex">
                    <a
                      href={`/shelves/${shelf.title}`}
                      className={
                        shelf.title === params.slug
                          ? `${shelfBtnTheming} bg-myred`
                          : `${shelfBtnTheming} bg-myblack`
                      }
                    >
                      {shelf.title}
                    </a>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-small">No shelves</p>
            )}
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
          {relevantBooks ? (
            <>
              <div className="flex flex-row flex-wrap">
                {relevantBooks?.map((book) => (
                  <SingleBook key={book.id} {...book} shelves={allShelves} />
                ))}
              </div>
            </>
          ) : (
            <p className="text-small">No books</p>
          )}
        </div>
      </div>
    </section>
  )
}
