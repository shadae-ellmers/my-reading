'use client'

type ApiBookProps = {
  title: string
  author_name: object
  cover_edition_key: string
}

export function ApiBook({
  title,
  author_name,
  cover_edition_key,
}: ApiBookProps) {
  return (
    <section>
      <div className="py-4 flex flex-row">
        <div className="flex flex-col items-center">
          <img
            src={
              cover_edition_key
                ? `https://covers.openlibrary.org/b/OLID/` +
                  cover_edition_key +
                  `.jpg`
                : 'cover-placeholder.png'
            }
            alt="book cover"
            width="200"
            className="pt-1 px-4 pb-4"
          />
          <button className="my-1 py-2 px-8 w-fit text-mywhite bg-myred rounded-full">
            Add book
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl my-1">{title}</h2>
          {Array.isArray(author_name) && author_name.length > 0 && (
            <p className="text-2xl my-1">{author_name[0]}</p>
          )}
        </div>
      </div>
    </section>
  )
}
