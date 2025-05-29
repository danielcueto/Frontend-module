import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { books } from "../types/Book";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const book = books.find((book) => book.id === id);
  
  useEffect(() => {
    if (!book) {
      navigate("/not-found");
    }
  }, [book, navigate]);
  
  return (
    <div className="min-h-screen p-8">
      <div className="mb-6">
        <Link to="/books" className="text-red-500 hover:underline">← Back to Books</Link>
      </div>
      {book && (
        <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <h2 className="text-xl text-gray-600 mb-6">by {book.author}</h2>
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-2">Description:</h3>
            <p className="text-gray-700">{book.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;