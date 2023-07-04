import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h2>Books I want to read</h2>
      <Link href="/tbr-books/add-tbr">Add books</Link>
    </>
  )
}
