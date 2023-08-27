import { CurrentReadBook } from '../components/CurrentReadBook'
import OnClickDelete from '../components/OnClickDelete'
import prisma from '../prisma/client'

function getCurrentReadBooks() {
  return prisma.currentBooks.findMany()
}

export default async function Page() {
  const allCurrentBooks = await getCurrentReadBooks()

  return (
    <section className="text-2xl leading-loose">
      <p className="underline text-3xl font-extrabold">Currently Reading</p>
      <div>
        {allCurrentBooks?.map((book) => (
          <CurrentReadBook key={book.id} {...book} />
        ))}
      </div>
    </section>
  )
}
