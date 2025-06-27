import { Link, useNavigate } from 'react-router-dom';
import GitHubStars from "./GithubStarts";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full py-6 px-4 md:py-8">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/solo.webp" alt="Solo Logo" className="w-10 h-10" />
            <span className="text-xl font-bold">Solo</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-8 flex align-center justify-center items-center">
          <Link
            to="/"
            className="hover:text-purple-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/downloads"
            className="hover:text-purple-300 transition-colors"
          >
            Download
          </Link>
          <Link
            to="/features"
            className="hover:text-purple-300 transition-colors"
          >
            Features
          </Link>
          <Link
            to="/documentation"
            className="hover:text-purple-300 transition-colors"
          >
            Documentation
          </Link>
          <a
            href="https://github.com/sreq-inc/solo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors flex items-center gap-2"
          >
            <GitHubStars owner="sreq-inc" repo="Solo" />
          </a>
        </div>
        <button
          onClick={() => navigate('/downloads')}
          className="px-5 py-2 bg-purple-600 cursor-pointer rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <ArrowDownTrayIcon className="w-4 h-4" />
          Download
        </button>
      </nav>
    </header>
  );
};
