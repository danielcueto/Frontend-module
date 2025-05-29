import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome message</h1>
      <Link 
        to="/books" 
        className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
      >
        View All Books
      </Link>
    </div>
  );
};

export default Home;