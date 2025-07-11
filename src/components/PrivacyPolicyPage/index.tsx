import { useState, useEffect } from 'react';

export const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-we-collect', title: 'Information We Collect' },
    { id: 'cookies', title: 'Use of Cookies and Similar Technologies' },
    { id: 'sharing-disclosure', title: 'Sharing and Disclosure of Information' },
    { id: 'global-privacy-rights', title: 'Your Rights Under Global Privacy Laws' },
    { id: 'security', title: 'Security of Your Data' },
    { id: 'children-privacy', title: 'Children\'s Privacy' },
    { id: 'policy-changes', title: 'Changes to This Privacy Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-b from-gray-900 to-purple-900 text-white">
      <main className="flex w-full max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-80 bg-gray-800/50 border-r border-purple-700/30 p-6">
          <div className="sticky top-6">
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-2 text-sm transition-colors rounded-md ${activeSection === section.id
                      ? 'bg-purple-700 text-white font-medium'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 px-8 py-12">
          <div className="max-w-4xl space-y-12">

            <section id="introduction" className="space-y-6">
              <h1 className="text-3xl font-bold text-white">Privacy Policy – Solo (English Version)</h1>
              <div className="w-full h-px bg-purple-400 mb-6"></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Welcome to Solo. Your privacy is important to us. This Privacy Policy explains how Solo collects, uses, and protects your information when you use our app and related services, including compliance with global privacy laws such as the GDPR, CCPA, and LGPD.
                </p>
              </div>
            </section>

            <section id="information-we-collect" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
              <div className="w-full h-px bg-purple-400 mb-6"></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Solo is designed as a local application and does not collect, store, or share any personal information about you. We do not require user accounts or login credentials. Your data stays on your device unless you choose to share it via specific features.
                </p>
              </div>
            </section>

            <section id="cookies" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Use of Cookies and Similar Technologies</h2>
              <div className="w-full h-px bg-purple-400 mb-6"></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Cookies, also known as tracking cookies or browser cookies, and similar technologies such as web beacons, clear GIFs, pixel tags, and JavaScript (collectively, "Cookies") are small pieces of data, usually text files, placed on a computer, tablet, phone, or similar device when you use that device to access online services.
                </p>
                <p>
                  The Solo app may set Cookies locally on your device to support certain functionalities within the app. However, Solo does not use Cookies or any similar technologies for tracking, profiling, or collecting personal data. These Cookies are solely intended to enhance your experience and enable app features to work properly.
                </p>
                <p>
                  Since Solo operates primarily as a local application and does not require user login, it does not perform any user tracking or data collection through Cookies.
                </p>
                <p>
                  If you visit our official Solo website, it may use Cookies to provide essential website functions or improve user experience. You can control or disable Cookies via your browser settings, but this may affect your experience on the website.
                </p>
                <p>
                  To learn more about Cookies and how to manage or delete them, please visit{" "}
                  <a
                    href="http://www.allaboutcookies.org/"
                    className="text-purple-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://www.allaboutcookies.org/
                  </a>.
                </p>
              </div>
            </section>

            <section id="sharing-disclosure" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Sharing and Disclosure of Information</h2>
              <div className="w-full h-px bg-purple-400 mb-6"></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Solo does not share your data with third parties because it does not collect or store personal data. Any sharing you do is entirely under your control, such as using the Git-based sharing feature which requires your license key and explicit action.
                </p>
              </div>
            </section>

            <section id="global-privacy-rights" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Your Rights Under Global Privacy Laws</h2>
              <div className="w-full h-px bg-purple-400 mb-6"></div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">General Data Protection Regulation (GDPR) – European Union</h3>
                  <p>
                    While Solo does not collect personal data, if you reside in the European Union, you have the right to request access, correction, or deletion of any personal data we might process in the future. Since we do not process such data, these rights currently do not apply.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">California Consumer Privacy Act (CCPA) – California, USA</h3>
                  <p>
                    Under CCPA, California residents have the right to know what personal data is collected, to request deletion, and to opt out of sale of personal data. Solo does not collect or sell personal data, so these rights are not applicable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Lei Geral de Proteção de Dados (LGPD) – Brazil</h3>
                  <p>
                    Under LGPD, Brazilian residents have rights similar to GDPR, including access, correction, deletion, and data portability. Since Solo does not collect or process personal data, these rights do not apply.
                  </p>
                </div>
                <p>
                  If Solo's data practices change in the future, we will update this policy accordingly.
                </p>
              </div>
            </section>

            <section id="security" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Security of Your Data</h2>
              <div className="w-full h-px bg-purple-400 mb-6"></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Because Solo does not collect or store data externally, there is minimal risk of data breaches. Your data stays on your device, secured by your own device's security measures.
                </p>
              </div>
            </section>

            <section id="children-privacy" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Children's Privacy</h2>
              <div className="w-full h-px bg-purple-400 mb-6"></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Solo is not intended for use by children under 13 years old. We do not knowingly collect data from children.
                </p>
              </div>
            </section>

            <section id="policy-changes" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Changes to This Privacy Policy</h2>
              <div className="w-full h-px bg-purple-400 mb-6"></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We may update this policy to reflect changes in the law or Solo's functionality. We will notify you through the app or website about significant changes.
                </p>
              </div>
            </section>

            <section id="contact" className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
              <div className="w-full h-px bg-purple-400 mb-6"></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  If you have questions or concerns about this Privacy Policy, please contact us at{" "}
                  <a
                    href="mailto:contact@soloclient.com"
                    className="text-purple-400 hover:underline"
                  >
                    contact@soloclient.com
                  </a>.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
