import Link from 'next/link'
import { CurrentReadBook } from '../components/CurrentReadBook'
import { AddBookButton } from '../components/AddBookButton'
import prisma from '../prisma/client'
import TopBooks from '../components/TopBooks'

export default async function Page() {
  const allCurrentBooks = await prisma.currentBooks.findMany()

  return (
    <section className="min-h-screen">
      <div className="relative">
        <img
          src="studio.jpg"
          alt="apartment animation at night"
          className="w-full max-h-60 object-cover"
        ></img>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3">
          <h1 className="text-mywhite font-semibold text-4xl bg-myblack bg-opacity-70 px-8 py-3 rounded-3xl text-center">
            Reach your reading goals with Readr
          </h1>
        </div>
      </div>
      <div className="text-2xl leading-loose py-8 px-16 flex">
        <div className="w-2/3">
          <h2>What is Readr?</h2>
          <p>
            Readr is a website and app built to make reading fun and easy. We
            use modern technology and learn from real people to enhance the
            reading experience.
          </p>
          <br />
          <h2>Who are we?</h2>
          <p>
            Readr is built by a one-woman-team. I'm Shadae, and I work as a
            software developer full time and code on the side, which is how this
            project came to fruition. I love to read in my spare time, and
            wanted a way to make tracking my reading fun and easy for me.
          </p>
        </div>
        <div className="w-1/3 border-l-4 border-myred border-opacity-50 ml-8 pl-8">
          <TopBooks />
        </div>
      </div>
    </section>
  )
}
