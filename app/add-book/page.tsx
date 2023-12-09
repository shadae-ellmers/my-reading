import { BookSearch } from '../../components/BookSearch'

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <img
          src="studio.jpg"
          alt="apartment animation at night"
          className="w-full max-h-60 object-cover"
        ></img>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3">
          <h1 className="text-mywhite font-semibold text-4xl">
            Reach your reading goals
          </h1>
        </div>
      </div>
      <div className="text-2xl leading-loose py-8 px-16">
        <BookSearch />
      </div>
    </div>
  )
}
