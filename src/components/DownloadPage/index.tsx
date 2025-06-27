import { useGitHubRelease } from "../../hooks/useGitHubRelease";
import { useState } from "react";

const PLATFORMS = [
  { key: "windows", label: "Windows" },
  { key: "mac", label: "Mac" },
  { key: "linux", label: "Linux" },
];

const PLATFORM_FILTERS: Record<string, string[]> = {
  windows: ["win", "windows", ".exe", ".msi"],
  mac: ["mac", "darwin", ".dmg"],
  linux: ["linux", ".appimage", ".deb", ".rpm"],
};

const DownloadPage = () => {
  const { release } = useGitHubRelease("sreq-inc", "Solo");
  const [selectedPlatform, setSelectedPlatform] = useState("mac");

  const getOSName = (fileName: string): string => {
    const name = fileName.toLowerCase();
    if (name.includes('windows') || name.includes('win') || name.includes('.exe') || name.includes('.msi')) {
      return 'Windows';
    }
    if (name.includes('mac') || name.includes('darwin') || name.includes('.dmg')) {
      return 'macOS';
    }
    if (name.includes('linux') || name.includes('.appimage')) {
      return 'Linux (AppImage)';
    }
    if (name.includes('.deb')) {
      return 'Linux (Debian/Ubuntu)';
    }
    if (name.includes('.rpm')) {
      return 'Linux (Red Hat/Fedora)';
    }
    return 'Other';
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredAssets = release?.assets?.filter((asset) => {
    const name = asset.name.toLowerCase();
    return PLATFORM_FILTERS[selectedPlatform].some((kw: string) => name.includes(kw));
  }) || [];



  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-b from-gray-900 to-purple-900 text-white">
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-2">Download the fully-offline API-client today</h1>
        <p className="text-center text-gray-300 mb-8">
          Latest Version: {release?.tag_name} | Release Date: {release ? formatDate(release.published_at) : "-"}
        </p>
        <div className="flex justify-end gap-4 mb-6">
          {PLATFORMS.map((p) => (
            <button
              key={p.key}
              className={`px-6 cursor-pointer py-2 rounded-full border font-medium transition-colors ${selectedPlatform === p.key ? "bg-purple-700 text-white border-purple-400" : "bg-gray-800 text-gray-200 border-gray-700 hover:bg-purple-800 hover:text-white"}`}
              onClick={() => setSelectedPlatform(p.key)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden mb-8">
          <table className="w-full text-left">
            <thead className="bg-gray-900">
              <tr>
                <th className="py-3 px-4 font-semibold text-purple-300">Platform</th>
                <th className="py-3 px-4 font-semibold text-purple-300">Version</th>
                <th className="py-3 px-4 font-semibold text-purple-300 text-right">Download</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.length > 0 ? filteredAssets.map((asset) => (
                <tr key={asset.name} className="border-t border-gray-700">
                  <td className="py-3 px-4">
                    {getOSName(asset.name)}{asset.name.toLowerCase().includes("portable") ? " (Portable)" : ""}
                  </td>
                  <td className="py-3 px-4">{release?.tag_name}</td>
                  <td className="py-3 px-4 text-right">
                    <a href={asset.browser_download_url} className="text-purple-400 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Download</a>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan={3} className="py-6 px-4 text-center text-gray-400">No downloads available for this platform.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mb-8 mt-16">
          <h2 className="text-xl font-semibold mb-2 text-purple-300">Homebrew</h2>
          <p className="mb-2">To install via Homebrew, run the following command:</p>
          <div className="flex items-center gap-2 mb-2">
            <pre className="bg-gray-900 rounded-md px-4 py-2 text-purple-200 inline-block">brew install solo</pre>
          </div>
          <p className="text-sm text-gray-400">
            The release notes along with the release and source artifacts can be found under the <a href={`https://github.com/sreq-inc/Solo/releases/tag/${release?.tag_name}`} className="text-purple-300 underline">GitHub release</a>.
          </p>
        </div>
        <p className="text-xs text-gray-500 text-left mt-8">

          By downloading and using Solo, I agree to the <a href="#" className="text-purple-300 underline">Privacy Policy</a> and <a href="#" className="text-purple-300 underline">Terms</a>.
        </p>
      </main>
    </div>
  );
};

export default DownloadPage;
