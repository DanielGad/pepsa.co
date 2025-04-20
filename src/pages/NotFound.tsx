import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-12">
      <div className="max-w-xl">
        <h1 className="text-[rgb(165,22,27)] text-8xl font-bold mb-4">404</h1>
        <h2 className="text-[rgb(63,40,59)] text-2xl md:text-3xl font-semibold mb-6">
          Page Not Found
        </h2>
        <p className="text-[rgb(63,40,59)] text-lg mb-8">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/">
          <button className="bg-[rgb(165,22,27)] text-white px-6 py-3 rounded-full text-sm border border-transparent hover:bg-white hover:text-[rgb(63,40,59)] hover:border-[rgb(165,22,27)] transition-all duration-200 shadow cursor-pointer font-semibold">
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
