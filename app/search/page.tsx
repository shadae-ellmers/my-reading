import { BookSearch } from '../../components/BookSearch'
import { getData } from '../api/route'

export default async function Page() {
  const data = await getData()
  const dataArray = data.docs

  return (
    <section className="justify-start h-screen text-2xl leading-loose py-8 px-16">
      <BookSearch />
      {dataArray.length > 1 ? (
        <div>
          {dataArray.map((book: any) => (
            <div key={book.key}>
              <h2 className="font-extrabold">{book.title}</h2>
              {book.author_name ? (
                book.author_name.map((author: any) => (
                  <div key={author}>
                    <p className="text-xl">{author}</p>
                  </div>
                ))
              ) : (
                <></>
              )}
              {book.cover_edition_key ? (
                <img
                  src={
                    `https://covers.openlibrary.org/b/OLID/` +
                    book.cover_edition_key +
                    `.jpg`
                  }
                  alt="book cover"
                  width="200"
                />
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  )
}
