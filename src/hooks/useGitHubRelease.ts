import { useEffect, useState } from 'react';

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
}

export interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  assets: ReleaseAsset[];
}

interface UseGitHubReleaseReturn {
  release: GitHubRelease | null;
  loading: boolean;
  error: string | null;
}

export const useGitHubRelease = (owner: string, repo: string): UseGitHubReleaseReturn => {
  const [release, setRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelease = async () => {
      try {
        setLoading(true);
        setError(null);

        // Primeiro tenta buscar o latest.json
        try {
          const latestResponse = await fetch(
            `https://github.com/${owner}/${repo}/releases/latest/download/latest.json`
          );
          
          if (latestResponse.ok) {
            const latestData = await latestResponse.json();
            setRelease(latestData);
            return;
          }
        } catch (latestError) {
          console.warn('Failed to fetch latest.json, falling back to GitHub API');
        }

        // Fallback para a API do GitHub
        const apiResponse = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/releases/latest`
        );

        if (!apiResponse.ok) {
          throw new Error(`Failed to fetch release data: ${apiResponse.status}`);
        }

        const apiData = await apiResponse.json();
        setRelease(apiData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRelease();
  }, [owner, repo]);

  return { release, loading, error };
};
