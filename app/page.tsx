async function getCurrentReads() {
  const res = await fetch(`${process.env.BASE_URL}/api/getCurrentReads`)
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Page() {
  const data = await getCurrentReads()
  return (
    <>
      <h2>Currently reading</h2>
    </>
  )
}
