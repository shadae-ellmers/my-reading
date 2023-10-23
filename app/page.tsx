import Link from 'next/link'
import { CurrentReadBook } from '../components/CurrentReadBook'
import { AddBookButton } from '../components/AddBookButton'
import prisma from '../prisma/client'

function getCurrentReadBooks() {
  return prisma.currentBooks.findMany()
}

export default async function Page() {
  const allCurrentBooks = await getCurrentReadBooks()

  return (
    <section className="text-2xl leading-loose">
      <p className="underline text-3xl font-extrabold">Currently Reading</p>
      <AddBookButton />
      <div>
        {allCurrentBooks?.map((book) => (
          <CurrentReadBook key={book.id} {...book} />
        ))}
      </div>
    </section>
  )
}
