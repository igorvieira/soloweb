import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import GitHubStars from "./components/GithubStarts";

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-b from-gray-900 to-purple-900 text-white overflow-x-hidden">
      <header className="w-full py-6 px-4 md:py-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://github.com/igorvieira/Solo/blob/main/assets/logo.png?raw=true"
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">Solo</span>
          </div>
          <div className="hidden md:flex gap-8 flex align-center justify-center items-center">
            <a href="#" className="hover:text-purple-300 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              Documentation
            </a>
            <a
              href="https://github.com/igorvieira/Solo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors flex items-center gap-2"
            >
              <GitHubStars owner="igorvieira" repo="Solo" />
            </a>
          </div>
          <a
            href="https://github.com/igorvieira/Solo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-5 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2">
              <ArrowDownTrayIcon className="w-4 h-4" />
              Download
            </button>
          </a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="w-64 h-64 md:w-80 md:h-80 relative mb-8 md:mb-12">
          <img
            src="https://github.com/igorvieira/Solo/blob/main/assets/logo.png?raw=true"
            alt="Logo principal"
            className="w-full h-full object-contain animate-pulse"
          />
          <div className="absolute inset-0 bg-purple-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="flex flex-col gap-6 text-center max-w-3xl w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Powerful and simplified HTTP client
          </h1>
          <p className="text-lg md:text-xl text-gray-300 px-4 md:px-12">
            Solo is a modern HTTP client that makes testing, developing, and
            debugging APIs easy with an intuitive interface and advanced
            features.
          </p>
          <div className="flex gap-4 mt-4 justify-center">
            <a
              href="https://github.com/igorvieira/Solo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-purple-600 rounded-md font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
                <ArrowDownTrayIcon className="w-4 h-4" />
                Download Solo
              </button>
            </a>
            <button className="px-6 py-3 border border-white rounded-md font-medium hover:bg-white hover:text-purple-900 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full py-8 md:py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img
              src="https://github.com/igorvieira/Solo/blob/main/assets/logo.png?raw=true"
              alt="Logo"
              className="w-8 h-8"
            />
            <span className="text-lg font-medium">Solo</span>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Solo HTTP Client. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
