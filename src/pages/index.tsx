import type { ReactNode } from 'react';
import GitHubStars from '@site/src/components/GitHubStars';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <div className={styles.heroContainer}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src="/img/solo.webp" alt="Logo" className={styles.logoImage} />
            <span className={styles.logoText}>Solo</span>
          </div>
          <div className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <Link to="/docs/intro" className={styles.navLink}>
              Documentation
            </Link>
            <a
              href="https://github.com/igorvieira/Solo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              <GitHubStars owner="igorvieira" repo="Solo" />
            </a>
          </div>
          <Link
            to="/download"
            className={styles.downloadButton}
          >
            <svg
              className={styles.downloadIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <img
            src="https://res.cloudinary.com/dje6m1lab/image/upload/v1745970240/solo_vdht4s.webp"
            alt="Logo principal"
            className={styles.mainLogo}
          />
          <div className={styles.logoGlow}></div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            Powerful and simplified HTTP client
          </h1>
          <p className={styles.description}>
            Solo is a modern HTTP client that makes testing, developing, and
            debugging APIs easy with an intuitive interface and advanced
            features.
          </p>
          <div className={styles.buttons}>
            <Link
              to="/download"
              className={styles.primaryButton}
            >
              <svg
                className={styles.downloadIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Solo
            </Link>
            <Link to="/docs/intro" className={styles.secondaryButton}>
              View Documentation
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img
              src="https://github.com/igorvieira/Solo/blob/main/assets/logo.png?raw=true"
              alt="Logo"
              className={styles.footerLogoImage}
            />
            <span className={styles.footerLogoText}>Solo</span>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Solo HTTP Client. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
