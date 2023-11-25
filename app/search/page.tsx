import { BookSearch } from '../../components/BookSearch'

export default async function Page() {
  const data = await getData()
  const firstData = data.docs

  return (
    <section className="justify-start h-screen text-2xl leading-loose py-8 px-16">
      <BookSearch />
    </section>
  )
}

export async function getData(this: any) {
  const res = await fetch(
    'https://openlibrary.org/search.json?title=hello&limit=5'
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = res.json()

  return data
}
