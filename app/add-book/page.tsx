import { BookCategoryRadio } from '../../components/BookCategoryRadio'

export default function Page() {
  return (
    <div className="min-h-screen">
      <h1>Add A Book To Your Collection</h1>
      <h2>Which category do you want to add to?</h2>
      <BookCategoryRadio />
    </div>
  )
}
