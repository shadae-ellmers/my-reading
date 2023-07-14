import prisma from '../prisma/client'

export default async function Page() {
  // const data = await getCurrentReads()
  const allCurrentBooks = await prisma.currentBooks.findMany()
  return (
    <>
      <h2>Currently reading</h2>
      {allCurrentBooks.map((book) => (
        <div>
          <p>
            {book.title} by {book.author}
          </p>
        </div>
      ))}
    </>
  )
}
