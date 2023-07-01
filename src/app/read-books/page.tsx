import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h2>Books I have read</h2>
      <Link href="/read-books/add-read">Add books</Link>
    </>
  )
}
