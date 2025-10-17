import { useEffect, useState } from "react";

type GitHubStarsProps = {
  owner: string;
  repo: string;
};

const GitHubStars = ({ owner, repo }: GitHubStarsProps) => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
        );
        if (!response.ok) throw new Error("Failed to fetch repository data");
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStars();
  }, [owner, repo]);

  return (
    <a
      href={`https://github.com/${owner}/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid #e5e7eb',
        backgroundColor: 'white',
        borderRadius: '6px',
        padding: '6px 12px',
        gap: '8px',
        fontSize: '14px',
        fontWeight: '500',
        textDecoration: 'none',
        color: '#1f2937',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
      <span>Star</span>
      <span style={{ borderLeft: '1px solid #d1d5db', paddingLeft: '8px' }}>
        {stars?.toLocaleString() ?? "..."}
      </span>
    </a>
  );
};

export default GitHubStars;
