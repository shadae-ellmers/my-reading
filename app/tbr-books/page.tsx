import Link from 'next/link'
import prisma from '../../prisma/client'

export default async function Page() {
  const allTbrBooks = await prisma.tbrBooks.findMany()

  return (
    <div className="text-2xl leading-loose">
      <div className="flex flex-row justify-between">
        <h2 className="underline text-3xl font-extrabold pr-10">
          Books I Want To Read
        </h2>
        <a
          href="/tbr-books/add-tbr"
          className="relative inline-block text-lg group"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-fern transition-colors duration-300 ease-out border-2 border-fern rounded-lg group-hover:text-apricot">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-apricot"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fern group-hover:-rotate-180 ease"></span>
            <span className="relative">Add Books</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fern rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      <div>
        {allTbrBooks.map((book) => (
          <div key={book.id} className="flex flex-row py-3">
            <div className="flex flex-col justify-evenly">
              <h3 className="font-extrabold">{book.title}</h3>
              <p className="text-xl">{book.author}</p>
              <div className="flex flex-row py-3">
                <a
                  href="#_"
                  className="relative inline-block text-lg group mr-1"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-fern transition-colors duration-300 ease-out border-2 border-fern rounded-lg group-hover:text-apricot">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-apricot"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fern group-hover:-rotate-180 ease"></span>
                    <span className="relative">Currently Reading</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fern rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
                <a
                  href="#_"
                  className="relative inline-block text-lg group ml-1"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-fern transition-colors duration-300 ease-out border-2 border-fern rounded-lg group-hover:text-apricot">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-apricot"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fern group-hover:-rotate-180 ease"></span>
                    <span className="relative">Remove</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fern rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
