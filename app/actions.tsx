'use server'

import { use } from 'react'
import prisma from '../prisma/client'

// // create data

// export async function addNewBookData(book: any) {
//   if (book.category === 'currentread') {
//     const newBook = prisma.currentBooks.create({
//       data: {
//         title: book.title,
//         author: book.author,
//         cover: book.cover,
//       },
//     })
//     return newBook
//   } else if (book.category === 'tbr') {
//     const newBook = prisma.tbrBooks.create({
//       data: {
//         title: book.title,
//         author: book.author,
//         cover: book.cover,
//       },
//     })
//     return newBook
//   } else if (book.category === 'read') {
//     const newBook = prisma.readBooks.create({
//       data: {
//         title: book.title,
//         author: book.author,
//         cover: book.cover,
//         rating: Number(book.rating),
//       },
//     })
//     return newBook
//   }
// }

export async function addUser(user: object | undefined) {
  const allUsers = await prisma.user.findMany()
  let exists = false
  let userId = user.sub

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

export async function addShelfData(
  name: string,
  sessionUser: object | undefined
) {
  let userId = sessionUser.sub

  const allTings = await prisma.shelf.findMany()

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

// export async function deleteCurrentBook(bookId: string) {
//   const delBook = prisma.currentBooks.delete({
//     where: {
//       id: bookId,
//     },
//   })
//   return delBook
// }

// export async function deleteTbrBook(bookId: string) {
//   const delBook = prisma.tbrBooks.delete({
//     where: {
//       id: bookId,
//     },
//   })
//   return delBook
// }

// export async function deleteReadBook(bookId: string) {
//   const delBook = prisma.readBooks.delete({
//     where: {
//       id: bookId,
//     },
//   })
//   return delBook
// }

// update book rating

// export async function updateReadBook(bookId: string, bookRating: string) {
//   const updBook = prisma.readBooks.update({
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
