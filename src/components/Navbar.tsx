import { Link } from 'react-router-dom';
import GitHubStars from "./GithubStarts";

export const Navbar = () => {

  return (
    <header className="w-full py-6 px-4 md:py-8">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
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
            to="/"
            className="hover:text-purple-300 transition-colors"
          >
            Download
          </Link>
          {/*  <Link */}
          {/*   to="/downloads" */}
          {/*   className="hover:text-purple-300 transition-colors" */}
          {/* > */}
          {/*   Download */}
          {/* </Link> */}
          <Link
            to="/"
            className="hover:text-purple-300 transition-colors"
          >
            Documentation
          </Link>
          {/* <Link
            to="/documentation"
            className="hover:text-purple-300 transition-colors"
          >
            Documentation
          </Link> */}
          <a
            href="https://github.com/sreq-inc/solo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors flex items-center gap-2"
          >
            <GitHubStars owner="sreq-inc" repo="Solo" />
          </a>
        </div>
      </nav>
    </header>
  );
};
