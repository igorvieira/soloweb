import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";

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
      className="inline-flex text-black items-center border border-gray-950 bg-white rounded-md shadow-sm px-3 py-1.5 space-x-2 text-sm font-medium"
    >
      <StarIcon className="w-5 h-5" />
      <span>Star</span>
      <span className="border-l border-gray-300 pl-2">
        {stars?.toLocaleString() ?? "..."}
      </span>
    </a>
  );
};

export default GitHubStars;
