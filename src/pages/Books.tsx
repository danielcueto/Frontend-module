import { Link } from "react-router-dom";
import { books } from "../types/Book";
import BookList from "../components/BookList";

const Books = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="mb-6">
        <Link to="/" className="text-red-500 hover:underline">← Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">MyBooks</h1>
      <BookList books={books} />
    </div>
  );
};

export default Books;