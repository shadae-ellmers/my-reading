'use server'

import prisma from '../prisma/client'

// create data

export async function addNewBookData(book: any) {
  if (book.category === 'currentread') {
    const newBook = prisma.currentBooks.create({
      data: {
        title: book.title,
        author: book.author,
      },
    })
    return newBook
  } else if (book.category === 'tbr') {
    const newBook = prisma.tbrBooks.create({
      data: {
        title: book.title,
        author: book.author,
      },
    })
    return newBook
  } else if (book.category === 'read') {
    const newBook = prisma.readBooks.create({
      data: {
        title: book.title,
        author: book.author,
        rating: Number(book.rating),
      },
    })
    return newBook
  }
}

// delete data

export async function deleteCurrentBook(bookId: string) {
  const delBook = prisma.currentBooks.delete({
    where: {
      id: bookId,
    },
  })
  return delBook
}

export async function deleteTbrBook(bookId: string) {
  const delBook = prisma.tbrBooks.delete({
    where: {
      id: bookId,
    },
  })
  return delBook
}

export async function deleteReadBook(bookId: string) {
  const delBook = prisma.readBooks.delete({
    where: {
      id: bookId,
    },
  })
  return delBook
}

// get book data from api

export async function getSearchResults(results: any) {
  const res = await fetch(`https://openlibrary.org/search.json?q=${results}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data
}
