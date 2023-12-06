export async function getData() {
  const res = await fetch(
    'https://openlibrary.org/search.json?title=hello&limit=5'
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data
}
