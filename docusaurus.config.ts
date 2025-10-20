import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Solo",
  tagline: "Powerful and simplified HTTP client ⚡",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://www.soloclient.com",
  baseUrl: "/",

  organizationName: "igorvieira",
  projectName: "Solo",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/igorvieira/Solo/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/solo-og.png",
    metadata: [
      {
        name: "description",
        content:
          "Solo is a modern HTTP client that makes testing, developing, and debugging APIs easy with an intuitive interface. Support for HTTP, GraphQL, and gRPC. Offline-first and privacy-focused.",
      },
      {
        name: "keywords",
        content:
          "http client, api testing, graphql, grpc, curl, offline-first, api development, rest client, postman alternative",
      },
      { name: "author", content: "Igor Vieira" },
      {
        property: "og:title",
        content: "Solo - Powerful and simplified HTTP client ⚡",
      },
      {
        property: "og:description",
        content:
          "Powerful and simplified HTTP client for testing APIs. Support for HTTP, GraphQL, and gRPC. Work offline with complete privacy - your API keys never leave your machine.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.soloclient.com" },
      {
        property: "og:image",
        content: "https://www.soloclient.com/img/solo-og.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Solo HTTP Client - Powerful and simplified HTTP client ⚡",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@igorvieira" },
      { name: "twitter:creator", content: "@igorvieira" },
      {
        name: "twitter:title",
        content: "Solo - Powerful and simplified HTTP client ⚡",
      },
      {
        name: "twitter:description",
        content:
          "Modern HTTP client for testing APIs. Offline-first, supports HTTP, GraphQL & gRPC. Complete privacy for your API development.",
      },
      {
        name: "twitter:image",
        content: "https://www.soloclient.com/img/solo-og.png",
      },
      {
        name: "twitter:image:alt",
        content: "Solo HTTP Client - Powerful and simplified HTTP client ⚡",
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Solo",
      logo: {
        alt: "Solo Logo",
        src: "img/solo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/igorvieira/Solo",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/igorvieira/Solo",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Solo HTTP Client. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
