import Link from 'next/link'
import prisma from '../../prisma/client'
import { AddBookButton } from '../../components/AddBookButton'
import { TbrBook } from '../../components/TbrBook'

export default async function Page() {
  const allTbrBooks = await prisma.tbrBooks.findMany()

  return (
    <div className="text-2xl leading-loose">
      <p className="underline text-3xl font-extrabold pr-10">
        Books I Want To Read
      </p>
      <AddBookButton />
      <div>
        {allTbrBooks.map((book) => (
          <TbrBook key={book.id} {...book} />
        ))}
      </div>
    </div>
  )
}
