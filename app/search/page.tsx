import { getSession } from '@auth0/nextjs-auth0'
import { BookSearch } from '../../components/BookSearch'
import prisma from '../../prisma/client'
import { Shelf } from '@prisma/client'

interface PageProps {
  shelves: Shelf[]
}

export default async function Page() {
  const session = await getSession()
  const user = session?.user

  const allShelves = await prisma.shelf.findMany({
    where: {
      user_id: user?.sub,
    },
  })

  return (
    <section className="justify-start text-2xl min-h-screen leading-loose py-8 px-16">
      <BookSearch shelves={allShelves} />
    </section>
  )
}
