'use server'

import { use } from 'react'
import prisma from '../prisma/client'

// get data

// move data

export async function moveBookData(
  book: any,
  userId: string,
  shelfName: string
) {
  const shelf = await prisma.shelf.findUnique({
    where: { title: shelfName },
    select: { id: true },
  })

  if (!shelf) {
    throw new Error(`Shelf with title ${shelfName} not found`)
  }

  const newBook = await prisma.book.create({
    data: {
      title: book.title,
      author: book.author,
      cover: book.cover,
      rating: book.rating,
      user_id: userId,
      shelves: {
        connect: { id: shelf.id },
      },
    },
  })

  return newBook
}

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

  const newBook = await prisma.book.create({
    data: {
      title: book.title,
      author: book.author,
      cover: book.cover,
      rating: book.rating,
      user_id: userId,
      shelves: {
        connect: { id: shelf.id },
      },
    },
  })
  return newBook
}

export async function addShelfData(name: string, userId: string) {
  const addNewShelf = await prisma.shelf.create({
    data: {
      title: name,
      user_id: userId,
    },
  })

  return addNewShelf
}

// delete data

export async function deleteBook(
  bookId: string,
  userId: string,
  shelf: string
) {
  const book = await prisma.book.findFirst({
    where: {
      id: bookId,
      shelfId: shelf,
    },
    select: {
      user_id: true,
    },
  })

  if (!book || book.user_id !== userId) {
    throw new Error('Book not found or does not belong to the user.')
  }

  const delBook = await prisma.book.deleteMany({
    where: {
      id: bookId,
      shelfId: shelf,
    },
  })
  return delBook
}

// update book rating

export async function updateReadBook(
  bookId: string,
  bookRating: string,
  userId: string
) {
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    select: {
      user_id: true,
    },
  })

  if (!book || book.user_id !== userId) {
    throw new Error('Book not found or does not belong to the user.')
  }

  const updBook = await prisma.book.update({
    where: {
      id: bookId,
    },
    data: {
      rating: bookRating,
    },
  })
  return updBook
}

// get book data from api

export async function getSearchResults(results: any) {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${results}&limit=15`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data
}
