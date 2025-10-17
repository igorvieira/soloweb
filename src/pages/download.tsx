import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './download.module.css';

interface Asset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface LatestRelease {
  tag_name: string;
  name: string;
  published_at: string;
  assets: Asset[];
}

type Platform = 'macos' | 'windows' | 'linux';

export default function Download(): JSX.Element {
  const [release, setRelease] = useState<LatestRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activePlatform, setActivePlatform] = useState<Platform>('macos');

  useEffect(() => {
    fetch('https://api.github.com/repos/igorvieira/Solo/releases/latest')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch latest release');
        return res.json();
      })
      .then((data) => {
        setRelease(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  };

  const getDownloadsByPlatform = (assets: Asset[]) => {
    const macOS = assets.filter(a =>
      a.name.includes('.dmg') || a.name.toLowerCase().includes('darwin') || a.name.toLowerCase().includes('macos')
    );
    const windows = assets.filter(a =>
      a.name.includes('.exe') || a.name.includes('.msi') || a.name.toLowerCase().includes('windows')
    );
    const linux = assets.filter(a =>
      a.name.includes('.AppImage') || a.name.includes('.deb') || a.name.includes('.rpm') || a.name.toLowerCase().includes('linux')
    );

    return { macOS, windows, linux };
  };

  const getPlatformIcon = (platform: Platform) => {
    switch (platform) {
      case 'macos':
        return '🍎';
      case 'windows':
        return '🪟';
      case 'linux':
        return '🐧';
    }
  };

  const getPlatformName = (platform: Platform) => {
    switch (platform) {
      case 'macos':
        return 'macOS';
      case 'windows':
        return 'Windows';
      case 'linux':
        return 'Linux';
    }
  };

  return (
    <Layout
      title="Download Solo"
      description="Download the latest version of Solo HTTP Client">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Download Solo</h1>
          <p className={styles.subtitle}>
            Get the latest version of Solo HTTP Client
          </p>
        </div>

        {loading && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Loading latest release...</p>
          </div>
        )}

        {error && (
          <div className={styles.error}>
            <p>Failed to load release: {error}</p>
            <p>
              Visit{' '}
              <a
                href="https://github.com/igorvieira/Solo/releases"
                target="_blank"
                rel="noopener noreferrer">
                GitHub Releases
              </a>{' '}
              directly
            </p>
          </div>
        )}

        {!loading && !error && release && (
          <div className={styles.downloadSection}>
            <div className={styles.versionInfo}>
              <h2>Version {release.tag_name}</h2>
              <p>Released on {formatDate(release.published_at)}</p>
            </div>

            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activePlatform === 'macos' ? styles.tabActive : ''}`}
                onClick={() => setActivePlatform('macos')}>
                <span className={styles.tabIcon}>{getPlatformIcon('macos')}</span>
                <span>{getPlatformName('macos')}</span>
              </button>
              <button
                className={`${styles.tab} ${activePlatform === 'windows' ? styles.tabActive : ''}`}
                onClick={() => setActivePlatform('windows')}>
                <span className={styles.tabIcon}>{getPlatformIcon('windows')}</span>
                <span>{getPlatformName('windows')}</span>
              </button>
              <button
                className={`${styles.tab} ${activePlatform === 'linux' ? styles.tabActive : ''}`}
                onClick={() => setActivePlatform('linux')}>
                <span className={styles.tabIcon}>{getPlatformIcon('linux')}</span>
                <span>{getPlatformName('linux')}</span>
              </button>
            </div>

            <div className={styles.tabContent}>
              {(() => {
                const { macOS, windows, linux } = getDownloadsByPlatform(release.assets);
                let currentAssets: Asset[] = [];

                if (activePlatform === 'macos') currentAssets = macOS;
                if (activePlatform === 'windows') currentAssets = windows;
                if (activePlatform === 'linux') currentAssets = linux;

                if (currentAssets.length === 0) {
                  return (
                    <div className={styles.noDownloads}>
                      <p>No downloads available for {getPlatformName(activePlatform)}</p>
                    </div>
                  );
                }

                return (
                  <table className={styles.downloadTable}>
                    <thead>
                      <tr>
                        <th>File</th>
                        <th>Size</th>
                        <th>Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentAssets.map((asset) => (
                        <tr key={asset.name}>
                          <td className={styles.fileName}>{asset.name}</td>
                          <td>{formatSize(asset.size)}</td>
                          <td>
                            <a
                              href={asset.browser_download_url}
                              className={styles.downloadButton}
                              target="_blank"
                              rel="noopener noreferrer">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                              </svg>
                              Download
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              })()}
            </div>
          </div>
        )}

        <div className={styles.footer}>
          <p>
            Solo is an offline-first HTTP client for testing, developing, and
            debugging APIs.
          </p>
          <p>
            <a href="/">Back to Home</a> •{' '}
            <a href="/docs/intro">Documentation</a> •{' '}
            <a
              href="https://github.com/igorvieira/Solo"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
