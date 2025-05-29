import { Link } from "react-router-dom";
import type { Book } from "../types/Book";

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <div key={book.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-2">{book.title}</h2>
          <p className="text-gray-600 mb-2">by {book.author}</p>
          <p className="mb-4 line-clamp-3">{book.description}</p>
          <Link 
            to={`/books/${book.id}`}
            className="text-red-500 hover:underline"
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;