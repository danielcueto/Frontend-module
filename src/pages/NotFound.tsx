import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-8 text-gray-600">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/"
        className="inline-block bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;