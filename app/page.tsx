const getCurrentReads = async () => {
  const res = await fetch(process.env.BASE_URL + '/api/getCurrentReads', {
    method: 'GET',
  })
  if (res.ok) {
    return res.json()
  }
  return []
}

export default async function Page() {
  const data = await getCurrentReads()
  return (
    <>
      <h2>Currently reading</h2>
      <p>{data}</p>
    </>
  )
}
