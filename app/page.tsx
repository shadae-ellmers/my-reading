import { getSession } from '@auth0/nextjs-auth0'
import prisma from '../prisma/client'
import { AddBookButton } from '../components/AddBookButton'
import { SingleBook } from '../components/SingleBook'

export default async function Page() {
  return (
    <section className="min-h-screen">
      {/* page banner */}
      <div className="relative bg-myblack">
        <img
          src="flat-lay-bookmark-books-assortment.jpg"
          alt="flat lay of books with tea and lavender"
          className="w-full max-h-60 object-cover opacity-50"
        ></img>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3">
          <h1 className="text-mywhite text-medium sm:text-extralg bg-myblack bg-opacity-80 px-8 py-3 rounded-3xl text-center">
            Reach your reading goals
          </h1>
        </div>
      </div>

      <div className="text-2xl leading-loose px-5 sm:px-20 py-8 md:px-30 lg:px-40 flex justify-center">
        <div className="items-center w-auto">
          {/* content */}
          <div className="py-5 text-center">
            <h2 className="text-large sm:text-extralg">What is Readr?</h2>
            <h3 className="text-medium sm:text-large">
              Our goal is to make reading fun and easy
            </h3>
            <div className="flex flex-col md:flex-row md:justify-between py-10">
              <div className="flex flex-col justify-start md:px-0 py-2.5 md:py-0 px-2.5 w-auto md:w-1/3">
                <img
                  src="hand-drawn-flat-design-stack-books.jpg"
                  alt="hand drawn flat design stack books"
                  className="max-h-52 mx-auto rounded-[75px]"
                />
                <p className="text-medium pt-8">
                  Track your reading and habits
                </p>
              </div>
              <div className="flex flex-col justify-start px-2.5 w-auto md:w-1/3">
                <img
                  src="6885298.jpg"
                  alt=""
                  className="max-h-52 mx-auto rounded-[75px]"
                />
                <p className="text-medium pt-8">
                  See what your favourite people are reading
                </p>
              </div>
              <div className="flex flex-col justify-start px-2.5 w-auto md:w-1/3">
                <img
                  src="6885301.jpg"
                  alt=""
                  className="max-h-52 mx-auto rounded-[75px]"
                />
                <p className="text-medium pt-8">Set goals and earn rewards</p>
              </div>
            </div>
          </div>

          {/* content divider */}
          <div className="w-full h-1 bg-myblack opacity-10"></div>

          {/* buttons */}
          <div className="pt-14 pb-10 flex sm:flex-row flex-col items-center">
            <h3 className="sm:mr-8 pt-0.5 mb-2 sm:mb-0 sm:w-1/3 xl:w-1/2 sm:text-left text-center text-large">
              Ready to begin?
            </h3>
            <div className="sm:w-2/3 xl:w-1/2 flex sm:flex-row flex-col justify-center md:justify-end text-center">
              <a
                href="#"
                className="sm:mr-2 my-2 sm:my-0 bg-myblack text-mywhite text-medium rounded-3xl px-6 py-2 hover:text-mywhite hover:bg-mygreen"
              >
                Join for free
              </a>
              <a
                href="#"
                className="sm:ml-2 mt-2 sm:mt-0 bg-myblack text-mywhite text-medium rounded-3xl px-6 py-2 hover:text-mywhite hover:bg-mygreen"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
