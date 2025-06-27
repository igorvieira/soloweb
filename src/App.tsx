import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import DownloadPage from "./components/DownloadPage";
import FeaturesPage from "./components/FeaturesPage";
import DocumentationPage from "./components/DocumentationPage";
import { Navbar } from "./components/Navbar";

const Footer = () => (
  <footer className="w-full py-8 md:py-12 bg-gray-900 border-t border-gray-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <img
          src="https://github.com/sreq-inc/Solo/blob/main/assets/logo.png?raw=true"
          alt="Solo Logo"
          className="w-8 h-8"
        />
        <span className="text-lg font-medium">Solo</span>
      </div>
      <div className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Solo HTTP Client. All rights reserved.
      </div>
    </div>
  </footer>
);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-b from-gray-900 to-purple-900 text-white overflow-x-hidden">
    <Navbar />
    {children}
    <Footer />
  </div>
);

const HomePage = () => (
  <Layout>
    <main className="flex-grow flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 py-12 md:py-24">
      <header className="w-64 h-64 md:w-80 md:h-80 relative mb-8 md:mb-12">
        <img
          src="https://res.cloudinary.com/dje6m1lab/image/upload/v1745970240/solo_vdht4s.webp"
          alt="Solo HTTP Client Logo"
          className="w-full h-full object-contain animate-pulse"
        />
        <div className="absolute inset-0 bg-purple-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
      </header>

      <div className="flex flex-col gap-6 text-center max-w-3xl w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Powerful and simplified HTTP client ⚡
        </h1>
        <p className="text-lg md:text-xl text-gray-300 px-4 md:px-12">
          Solo is a modern HTTP client that makes testing, developing, and
          debugging APIs easy with an intuitive interface and advanced features.
        </p>
        <div className="flex gap-4 mt-4 justify-center">
          <Link
            to="/downloads"
            className="px-6 py-3 bg-purple-600 rounded-md font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
            Download Solo
          </Link>
          <Link to="/documentation">
            <button className="px-6 py-3 border border-white rounded-md font-medium hover:bg-white hover:text-purple-900 transition-colors">
              View Documentation
            </button>
          </Link>
        </div>
      </div>
    </main>
  </Layout>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/downloads" element={<Layout><DownloadPage /></Layout>} />
        <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
        <Route path="/documentation" element={<Layout><DocumentationPage /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
