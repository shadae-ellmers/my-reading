export async function getSearchResults(results: any) {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${results}&limit=5`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data
}
