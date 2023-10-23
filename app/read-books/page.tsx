import Link from 'next/link'
import { ReadBook } from '../../components/ReadBook'
import { AddBookButton } from '../../components/AddBookButton'
import prisma from '../../prisma/client'

export default async function Page() {
  const allReadBooks = await prisma.readBooks.findMany()

  return (
    <div className="text-2xl leading-loose">
      <p className="underline text-3xl font-extrabold pr-10">
        Books I&apos;ve Read
      </p>
      <AddBookButton />
      <div>
        {allReadBooks.map((book) => (
          <ReadBook key={book.id} {...book} />
        ))}
      </div>
    </div>
  )
}
