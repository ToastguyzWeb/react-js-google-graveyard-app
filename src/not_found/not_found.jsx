import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="bg-white shadow-lg p-8 text-center w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6 max-w-2xl">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r px-6 py-4 from-purple-500 to-indigo-500 !text-white font-medium rounded-full hover:from-purple-600 hover:to-indigo-600 transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
