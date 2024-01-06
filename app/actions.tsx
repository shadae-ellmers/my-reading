'use server'

import { use } from 'react'
import prisma from '../prisma/client'

// get data

// create data

export async function addNewBookData(book: any, userId: string) {
  let bookShelfTitle = book.shelf

  const shelf = await prisma.shelf.findUnique({
    where: { title: bookShelfTitle },
    select: { id: true },
  })

  if (!shelf) {
    throw new Error(`Shelf with title ${bookShelfTitle} not found`)
  }

  const newBook = prisma.book.create({
    data: {
      title: book.title,
      author: book.author,
      cover: book.cover,
      rating: book.rating,
      user: {
        connect: { auth_id: userId },
      },
      shelves: {
        connect: { id: shelf.id },
      },
    },
  })
  return newBook
}

export async function addUser(userId: string) {
  const allUsers = await prisma.user.findMany()
  let exists = false

  for (let i = 0; i < allUsers.length; i++) {
    const element = allUsers[i]

    if (userId === element.auth_id) {
      exists = true
    }
  }

  if (exists === false) {
    const newUser = await prisma.user.create({
      data: {
        auth_id: userId,
      },
    })

    return newUser
  }
}

export async function addShelfData(name: string, userId: string) {
  const addNewShelf = await prisma.shelf.create({
    data: {
      title: name,
      user: {
        connect: { auth_id: userId },
      },
    },
  })

  return addNewShelf
}

// delete data

export async function deleteBook(bookId: string, userId: string) {
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    select: {
      auth_id: true,
    },
  })

  if (!book || book.auth_id !== userId) {
    throw new Error('Book not found or does not belong to the user.')
  }

  const delBook = prisma.book.deleteMany({
    where: {
      id: bookId,
    },
  })
  return delBook
}

// update book rating

// export async function updateReadBook(
//   bookId: string,
//   bookRating: string,
//   user: object | undefined
// ) {
//   const updBook = prisma.book.update({
//     where: {
//       id: bookId,
//     },
//     data: {
//       rating: Number(bookRating),
//     },
//   })
//   return updBook
// }

// get book data from api

export async function getSearchResults(results: any) {
  const res = await fetch(`https://openlibrary.org/search.json?q=${results}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data
}
