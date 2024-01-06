import Link from 'next/link'
import { CurrentReadBook } from '../components/SingleBook'
import { AddBookButton } from '../components/AddBookButton'
import prisma from '../prisma/client'
import TopBooks from '../components/TopBooks'
import { addUser } from './actions'

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
          <h1 className="text-mywhite text-extralg bg-myblack bg-opacity-80 px-8 py-3 rounded-3xl text-center">
            Reach your reading goals
          </h1>
        </div>
      </div>

      <div className="text-2xl leading-loose py-8 px-40 flex">
        <div className="items-center w-full">
          {/* content */}
          <div className="py-5 text-center">
            <h2 className="text-extralg">What is Readr?</h2>
            <h3 className="text-large">
              Our goal is to make reading fun and easy
            </h3>
            <div className="flex flex-row justify-between py-10">
              <div className="flex flex-col justify-start px-2.5 w-1/3">
                <img
                  src="hand-drawn-flat-design-stack-books.jpg"
                  alt="hand drawn flat design stack books"
                  className="max-h-52 mx-auto rounded-[75px]"
                />
                <p className="text-medium pt-8">
                  Track your reading and habits
                </p>
              </div>
              <div className="flex flex-col justify-start px-2.5 w-1/3">
                <img
                  src="6885298.jpg"
                  alt=""
                  className="max-h-52 mx-auto rounded-[75px]"
                />
                <p className="text-medium pt-8">
                  See what your favourite people are reading
                </p>
              </div>
              <div className="flex flex-col justify-start px-2.5 w-1/3">
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
          <div className="w-full h-0.5 bg-myblack opacity-10"></div>

          {/* slider with placeholder card, no functionality */}
          <div className="py-10 items-center w-full text-center flex flex-col">
            <h2 className="text-extralg">Top 5 Books This Week</h2>
            <div className="bg-mygreen flex flex-row w-1/3 rounded-3xl my-10">
              <img
                src="cover-placeholder.png"
                alt=""
                className="w-1/2 rounded-l-3xl"
              />
              <div className="w-1/2 px-5 text-mywhite">
                <div className="h-1/2 text-left flex justify-end flex-col">
                  <h3 className="text-extralg">1.</h3>
                </div>
                <div className="h-1/2 text-left flex justify-start flex-col">
                  <h3 className="text-large">Title</h3>
                  <h4 className="text-medium">Author</h4>
                </div>
              </div>
            </div>
          </div>

          {/* content divider */}
          <div className="w-full h-0.5 bg-myblack opacity-10"></div>

          {/* content with image */}
          <div className="py-14 flex">
            <div className="w-1/2 pr-8 flex justify-center flex-col">
              <p className="text-left">
                Readr is a unique platform that connects with other social
                platforms to provide you easy recommendations. Content creaters
                can link the books they mention directly on their profile, which
                can save you time searching.
              </p>
            </div>
            <img src="cozy-home.jpg" alt="" className="w-1/2 pl-8" />
          </div>

          {/* content divider */}
          <div className="w-full h-0.5 bg-myblack opacity-10"></div>

          {/* buttons */}
          <div className="pt-14 pb-10 flex justify-center">
            <h3 className="mr-8 pt-0.5 w-1/2 text-left">Ready to begin?</h3>
            <div className="w-1/2 flex flex-row justify-center">
              <a
                href="#"
                className="mr-2 bg-myblack text-mywhite rounded-3xl px-8 py-1 hover:text-mywhite hover:bg-mygreen"
              >
                Join for free
              </a>
              <a
                href="#"
                className="ml-2 bg-myblack text-mywhite rounded-3xl px-8 py-1 hover:text-mywhite hover:bg-mygreen"
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
