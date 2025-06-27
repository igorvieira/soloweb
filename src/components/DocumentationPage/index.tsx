const DocumentationPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-b from-gray-900 to-purple-900 text-white">
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-gray-300">
            Complete guides and documentation for Solo HTTP Client
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Getting Started</h2>
            <div className="space-y-4">
              <article className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Installation</h3>
                <p className="text-gray-300">Learn how to install Solo on your platform</p>
              </article>
              <article className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">First Request</h3>
                <p className="text-gray-300">Make your first HTTP request with Solo</p>
              </article>
              <article className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Configuration</h3>
                <p className="text-gray-300">Configure Solo for your workflow</p>
              </article>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Advanced Usage</h2>
            <div className="space-y-4">
              <article className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">API Testing</h3>
                <p className="text-gray-300">Advanced techniques for API testing</p>
              </article>
              <article className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Debugging</h3>
                <p className="text-gray-300">Debug your APIs effectively</p>
              </article>
              <article className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Automation</h3>
                <p className="text-gray-300">Automate your testing workflow</p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DocumentationPage;
