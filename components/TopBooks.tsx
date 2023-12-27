export default function TopBooks() {
  return (
    <section>
      <h2>Top 5 books this week:</h2>
      <div className="flex flex-col">
        <div>
          <div className="flex flex-row py-4 bg-mywhite bg-opacity-20 mr-8 mb-8 max-w-lg px-8">
            <div className="flex flex-col items-center">
              <img
                src="cover-placeholder.png"
                alt="book cover"
                width="150"
                className="pr-6"
              />
            </div>
            <div className="flex flex-col max-w-2xl justify-between">
              <div>
                <h2 className="text-2xl my-1">Book 1</h2>
                <p className="text-xl my-1">Author 1</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row py-4 bg-mywhite bg-opacity-20 mr-8 mb-8 max-w-lg px-8">
            <div className="flex flex-col items-center">
              <img
                src="cover-placeholder.png"
                alt="book cover"
                width="150"
                className="pr-6"
              />
            </div>
            <div className="flex flex-col max-w-2xl justify-between">
              <div>
                <h2 className="text-2xl my-1">Book 2</h2>
                <p className="text-xl my-1">Author 2</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row py-4 bg-mywhite bg-opacity-20 mr-8 mb-8 max-w-lg px-8">
            <div className="flex flex-col items-center">
              <img
                src="cover-placeholder.png"
                alt="book cover"
                width="150"
                className="pr-6"
              />
            </div>
            <div className="flex flex-col max-w-2xl justify-between">
              <div>
                <h2 className="text-2xl my-1">Book 3</h2>
                <p className="text-xl my-1">Author 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
