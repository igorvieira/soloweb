const FeaturesPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-b from-gray-900 to-purple-900 text-white">
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Solo Features</h1>
          <p className="text-xl text-gray-300">
            Powerful features for modern API development and testing
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <article className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-purple-300">Intuitive Interface</h2>
            <p className="text-gray-300">
              Clean and modern interface designed for developers. Easy to use and navigate.
            </p>
          </article>

          <article className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-purple-300">Multi-platform Support</h2>
            <p className="text-gray-300">
              Available for Windows, macOS, and Linux. Works consistently across all platforms.
            </p>
          </article>

          <article className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-purple-300">Offline Functionality</h2>
            <p className="text-gray-300">
              Fully offline HTTP client. No internet required for core functionality.
            </p>
          </article>

          <article className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-purple-300">Advanced Debugging</h2>
            <p className="text-gray-300">
              Comprehensive debugging tools for API development and testing.
            </p>
          </article>

          <article className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-purple-300">Fast Performance</h2>
            <p className="text-gray-300">
              Optimized for speed with reduced bundle size and improved performance.
            </p>
          </article>

          <article className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-purple-300">Open Source</h2>
            <p className="text-gray-300">
              Free and open source. Community-driven development on GitHub.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default FeaturesPage;
