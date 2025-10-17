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
        <div className={styles.heroContent}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Powerful and simplified HTTP client ⚡
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

          <div className={styles.logoContainer}>
            <img
              src="https://github.com/igorvieira/Solo/blob/main/assets/logo.png?raw=true"
              alt="Logo principal"
              className={styles.mainLogo}
            />
            <div className={styles.logoGlow}></div>
          </div>
        </div>
      </main>

      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <h2 className={styles.featuresTitle}>Why Choose Solo?</h2>
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Offline-First</h3>
              <p className={styles.cardDescription}>
                Work anywhere without internet. All your data stays local and private on your machine.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Multiple Protocols</h3>
              <p className={styles.cardDescription}>
                Support for HTTP, GraphQL, and gRPC. Test any API with a unified interface.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>cURL Integration</h3>
              <p className={styles.cardDescription}>
                Import and export cURL commands instantly. Perfect for documentation and scripting.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Collections & Variables</h3>
              <p className={styles.cardDescription}>
                Organize requests in folders. Use variables for different environments.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Privacy First</h3>
              <p className={styles.cardDescription}>
                Your API keys never leave your machine. No cloud sync, no tracking, just privacy.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Fast & Lightweight</h3>
              <p className={styles.cardDescription}>
                Native performance with minimal resource usage. No lag, no bloat.
              </p>
            </div>
          </div>
        </div>
      </section>

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
