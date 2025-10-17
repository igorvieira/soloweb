---
sidebar_position: 1
---

# Getting Started with Solo

Welcome to **Solo**, your powerful and simplified HTTP client for testing, developing, and debugging APIs.

## What is Solo?

Solo is a modern, **offline-first** API client that helps developers work with REST APIs, GraphQL, and gRPC services. Built with simplicity and power in mind, Solo provides an intuitive interface for managing your API requests without requiring an internet connection or cloud account.

### Key Features

- 🌐 **HTTP Requests** – Support for GET, POST, PUT, PATCH, and DELETE methods
- 🔐 **Authentication** – Bearer Token and Basic Auth support
- 🔎 **GraphQL** – Full GraphQL query support with schema introspection
- 📡 **gRPC** – gRPC service testing and debugging
- 📁 **Collections & Folders** – Organize your requests efficiently
- 🧪 **Variables** – Dynamic variable substitution across requests
- 📤 **cURL Export/Import** – Easy integration with existing workflows
- 💾 **Offline-First** – All data stored locally, no cloud required
- 🎨 **Modern UI** – Clean, intuitive interface with dark/light themes

## Installation

### macOS

Download and install Solo using this command:

```bash
curl -s https://api.github.com/repos/sreq-inc/solo/releases/latest \
| grep "browser_download_url" \
| grep ".dmg" \
| cut -d '"' -f 4 \
| xargs -n 1 curl -L --output solo.dmg && open solo.dmg
```

Or download directly from the [GitHub Releases](https://github.com/igorvieira/Solo/releases/latest) page.

### Windows & Linux

Download the appropriate installer for your platform from the [GitHub Releases](https://github.com/igorvieira/Solo/releases/latest) page.

## First Steps

Once installed, you can immediately start using Solo:

1. **Create your first request** – Click the "+" button to add a new HTTP request
2. **Organize with folders** – Create folders to group related requests
3. **Set up variables** – Define variables for reusable values across requests
4. **Test your API** – Send requests and inspect responses

All your data is **stored locally** on your machine, so you can work offline without any concerns about privacy or connectivity.

## Why Solo?

### Offline-First Architecture

Unlike cloud-based API clients, Solo stores all your data locally:

- ✅ **Complete privacy** – Your API keys and requests never leave your machine
- ✅ **Work anywhere** – No internet connection required
- ✅ **Fast performance** – No network latency for loading your data
- ✅ **Data ownership** – You control where your data lives

### Built for Developers

Solo focuses on what matters most to developers:

- **Simple interface** – No clutter, just the features you need
- **Keyboard shortcuts** – Work efficiently with keyboard navigation
- **Modern tech stack** – Built with Tauri and React for performance
- **Cross-platform** – Works on macOS, Windows, and Linux

## Next Steps

Explore the documentation to learn more about specific features:

- [HTTP Requests](/docs/http-requests) – Learn how to make REST API calls
- [GraphQL](/docs/graphql) – Work with GraphQL APIs
- [gRPC](/docs/grpc) – Test gRPC services
- [Variables](/docs/variables) – Use dynamic variables in your requests
- [Collections](/docs/collections) – Organize your API requests
- [cURL Integration](/docs/curl) – Import and export cURL commands
