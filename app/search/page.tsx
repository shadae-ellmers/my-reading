import { BookSearch } from '../../components/BookSearch'
import { getData } from '../api/route'

export default async function Page() {
  const data = await getData()
  const firstData = data.docs[0]

  return (
    <section className="justify-start h-screen text-2xl leading-loose py-8 px-16">
      <BookSearch />
      {/* <p>{firstData.title}</p> */}
    </section>
  )
}
