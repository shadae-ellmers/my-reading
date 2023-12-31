import Link from 'next/link'
import { CurrentReadBook } from '../components/CurrentReadBook'
import { AddBookButton } from '../components/AddBookButton'
import prisma from '../prisma/client'
import TopBooks from '../components/TopBooks'

export default async function Page() {
  const allCurrentBooks = await prisma.currentBooks.findMany()

  return (
    <section className="min-h-screen">
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
        <div className="py-5 items-center w-full text-center">
          <h2 className="text-extralg">What is Readr?</h2>
          <h3 className="text-large">
            Our goal is to make reading fun and easy
          </h3>
          <div className="flex flex-row justify-between py-10">
            <div className="flex flex-col justify-start px-2.5 w-1/3">
              <img
                src="hand-drawn-flat-design-stack-books.jpg"
                alt="hand drawn flat design stack books"
                className="max-h-52 mx-auto rounded-full"
              />
              <p className="text-medium">Track your reading and habits</p>
            </div>
            <div className="flex flex-col justify-start px-2.5 w-1/3">
              <img
                src="6885298.jpg"
                alt=""
                className="max-h-52 mx-auto rounded-full"
              />
              <p className="text-medium">
                See what your favourite people are reading
              </p>
            </div>
            <div className="flex flex-col justify-start px-2.5 w-1/3">
              <img
                src="6885301.jpg"
                alt=""
                className="max-h-52 mx-auto rounded-full"
              />
              <p className="text-medium">Set goals and earn rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
