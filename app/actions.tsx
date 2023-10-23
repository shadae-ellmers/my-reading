'use server'

import prisma from '../prisma/client'

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

export async function deleteCurrentBook(bookId: string) {
  const delBook = prisma.currentBooks.delete({
    where: {
      id: bookId,
    },
  })
  return delBook
}
