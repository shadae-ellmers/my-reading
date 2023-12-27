import { AddBookButton } from '../../components/AddBookButton'
import { CurrentReadBook } from '../../components/CurrentReadBook'
import prisma from '../../prisma/client'

export default async function Shelves() {
  const allCurrentBooks = await prisma.currentBooks.findMany()

  return (
    <section className="min-h-screen">
      <div className="relative">
        <img
          src="eggsacrosstheuniverse.jpg"
          alt="apartment animation at night"
          className="w-full max-h-60 object-cover"
        ></img>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3">
          <h1 className="text-mywhite font-semibold text-4xl bg-myblack bg-opacity-70 px-8 py-3 rounded-3xl">
            Shelves
          </h1>
        </div>
      </div>
      <div className="text-2xl leading-loose py-8 px-16 flex flex-row">
        <div className="w-1/6 border-r-4 border-myred border-opacity-50 mr-8 pr-8">
          <h2 className="text-3xl pb-4  border-b-2 border-myred border-opacity-50">
            Shelves
          </h2>
          <a
            className="py-2 text-2xl flex items-center hover:text-myred hover:underline hover:underline-offset-4 border-b-2 border-myred border-opacity-50"
            href="/shelves"
          >
            Currently Reading
          </a>
          <a
            className="py-2 text-2xl flex items-center hover:text-myred hover:underline hover:underline-offset-4 border-b-2 border-myred border-opacity-50"
            href="/read-books"
          >
            Read
          </a>
          <a
            className="py-2 text-2xl flex items-center hover:text-myred hover:underline hover:underline-offset-4 border-b-2 border-myred border-opacity-50"
            href="/tbr-books"
          >
            To Be Read
          </a>
        </div>
        <div className="w-5/6">
          <p className="text-3xl font-bold pb-2">Currently Reading</p>
          <AddBookButton />
          <div className="flex">
            {allCurrentBooks?.map((book) => (
              <CurrentReadBook key={book.id} {...book} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
