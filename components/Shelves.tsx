'use client'

import { useUser } from '@auth0/nextjs-auth0/client'
import { AddBookButton } from './AddBookButton'
import { addUser } from '../app/actions'

export default function Shelves() {
  const { user } = useUser()

  function checkUserExists(): any {
    addUser(user)
  }

  return (
    <section>
      {(window.onload = checkUserExists())}
      {/* shelves filter */}
      <div className="text-center">
        <div className="flex flex-row flex-wrap pt-6 pb-6">
          <a
            href="#"
            className="m-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
          >
            All Books
          </a>
          <a
            href="#"
            className="m-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
          >
            Currently Reading
          </a>
          <a
            href="#"
            className="m-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
          >
            Read
          </a>
          <a
            href="#"
            className="m-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
          >
            To Be Read
          </a>
          <a
            href="#"
            className="m-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
          >
            Favourites
          </a>
          <a
            href="#"
            className="m-2 bg-myblack text-mywhite rounded-3xl px-8 py-2 text-small hover:text-mywhite hover:bg-mygreen"
          >
            Did Not Finish
          </a>
        </div>
      </div>

      {/* content divider */}
      <div className="w-full h-0.5 bg-myblack opacity-10"></div>

      {/* books */}
      <div className="">
        <div className="flex flex-row">
          <AddBookButton />
          <p className="flex flex-col justify-center pt-6 pl-5 pr-1 text-small">
            Sort by:{' '}
          </p>
          <p className="flex flex-col justify-center pt-6 pl-1 pr-5 text-small">
            Default
          </p>
        </div>
        <div className="flex flex-row flex-wrap">
          {/* {allCurrentBooks?.map((book) => (
                <CurrentReadBook key={book.id} {...book} />
              ))} */}
        </div>
      </div>
    </section>
  )
}
