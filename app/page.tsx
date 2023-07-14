// async function getCurrentReads() {
//   const res = await fetch('http://localhost:3000/', { cache: 'no-store' })
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

export default async function Page() {
  // const data = await getCurrentReads()
  return (
    <>
      <h2>Currently reading</h2>
    </>
  )
}
