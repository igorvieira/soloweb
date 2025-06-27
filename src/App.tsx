import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import DownloadPage from "./components/DownloadPage";
// import DocumentationPage from "./components/DocumentationPage";
import { Navbar } from "./components/Navbar";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";



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
      <div className="flex flex-col-reverse xl:flex-row gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left max-w-3xl w-full">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Powerful and simplified HTTP client ⚡
          </h1>
          <p className="text-lg text-center md:text-left md:text-xl text-gray-300">
            Solo is a modern HTTP client that makes testing, developing, and
            debugging APIs easy with an intuitive interface and advanced features.
          </p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Link
              to="/downloads"
              className="px-6 py-3 bg-purple-600 rounded-md font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              Download Solo
            </Link>
            <Link to="/documentation">
              <button className="px-6 py-3 cursor-pointer border border-white rounded-md font-medium hover:bg-white hover:text-purple-900 transition-colors">
                View Documentation
              </button>
            </Link>
          </div>
        </div>

        <header className="w-64 h-64 md:w-80 md:h-80 relative mb-8 md:mb-12 flex justify-center items-center md:justify-start">
          <img
            src="https://res.cloudinary.com/dje6m1lab/image/upload/v1745970240/solo_vdht4s.webp"
            alt="Solo HTTP Client Logo"
            className="w-full h-full object-contain animate-pulse"
          />
          <div className="absolute inset-0 bg-purple-500 opacity-20 rounded-full blur-xl animate-pulse"></div>
        </header>

      </div>
      <Features />
    </main>
  </Layout>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Layout><DownloadPage /></Layout>} />
        {/* <Route path="/downloads" element={<Layout><DownloadPage /></Layout>} /> */}
        {/* <Route path="/documentation" element={<Layout><DocumentationPage /></Layout>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
