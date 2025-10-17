---
sidebar_position: 7
---

# Collections & Folders

Organize your API requests using Collections and Folders. Keep your workflow efficient by grouping related endpoints and structuring your API testing environment.

## What are Collections?

Collections are containers for organizing related API requests. Think of them as projects or workspaces where you group all requests for a specific API or feature.

### Benefits of Collections

- 📁 **Organization** – Group related requests together
- 🔄 **Reusability** – Share variables across requests
- 📝 **Documentation** – Add descriptions and context
- 🚀 **Efficiency** – Find requests quickly
- 💾 **Portability** – Export and share with team

## Creating Collections

### Create a New Collection

1. Click the **"New Collection"** button in the sidebar
2. Enter a name for your collection
3. Add an optional description
4. Click **Create**

Example collections:
```
📁 User Management API
📁 Payment Gateway
📁 E-commerce Backend
📁 Authentication Service
```

### Collection Properties

Each collection can have:
- **Name** – Descriptive title
- **Description** – Purpose and context
- **Variables** – Shared across all requests
- **Requests** – HTTP, GraphQL, and gRPC calls
- **Folders** – Sub-organization within collection

## Working with Folders

Folders help you organize requests within a collection into logical groups.

### Create a Folder

1. Right-click on a collection
2. Select **"New Folder"**
3. Enter a folder name
4. Click **Create**

### Folder Hierarchy

```
📁 E-commerce API
  ├── 📂 Authentication
  │   ├── Login
  │   ├── Logout
  │   └── Refresh Token
  ├── 📂 Users
  │   ├── Get User
  │   ├── Create User
  │   ├── Update User
  │   └── Delete User
  ├── 📂 Products
  │   ├── List Products
  │   ├── Get Product
  │   ├── Create Product
  │   └── Update Product
  └── 📂 Orders
      ├── Create Order
      ├── Get Order Status
      └── Cancel Order
```

### Nested Folders

Create sub-folders for deeper organization:

```
📁 Microservices API
  ├── 📂 User Service
  │   ├── 📂 Public Endpoints
  │   │   ├── Register
  │   │   └── Login
  │   └── 📂 Protected Endpoints
  │       ├── Get Profile
  │       └── Update Profile
  ├── 📂 Product Service
  │   ├── 📂 Catalog
  │   └── 📂 Inventory
  └── 📂 Order Service
      ├── 📂 Cart
      └── 📂 Checkout
```

## Managing Requests

### Add Request to Collection

1. Create or open a request
2. Click the **folder icon** or **"Save to Collection"**
3. Select a collection or folder
4. Name your request
5. Click **Save**

### Move Requests

Drag and drop requests to reorganize:
- Move between folders
- Reorder within a folder
- Move to different collections

### Duplicate Requests

Create copies of existing requests:
1. Right-click on a request
2. Select **"Duplicate"**
3. Modify the copy as needed

Useful for:
- Creating similar requests
- Testing variations
- A/B testing different payloads

## Collection Variables

Define variables that apply to all requests in a collection.

### Setting Collection Variables

1. Click on a collection
2. Go to **Variables** tab
3. Add variables for this collection

Example:
```
base_url: https://api.example.com
api_version: v1
auth_token: collection_specific_token
```

### Variable Inheritance

Variables cascade from collection to request:

```
Global Variables (lowest priority)
    ↓
Collection Variables
    ↓
Request Variables (highest priority)
```

Example:
- Global: `{{timeout}}` = 30
- Collection: `{{timeout}}` = 60
- Request uses: 60 seconds

## Organizing Strategies

### By Feature

Group by application features:

```
📁 Social Media App
  ├── 📂 Posts
  ├── 📂 Comments
  ├── 📂 Likes
  ├── 📂 Followers
  └── 📂 Notifications
```

### By HTTP Method

Group by request type:

```
📁 REST API
  ├── 📂 GET Requests
  ├── 📂 POST Requests
  ├── 📂 PUT Requests
  ├── 📂 PATCH Requests
  └── 📂 DELETE Requests
```

### By Environment

Separate development and production:

```
📁 Development
  ├── 📂 Users API (Dev)
  └── 📂 Payments API (Dev)

📁 Production
  ├── 📂 Users API (Prod)
  └── 📂 Payments API (Prod)
```

### By Workflow

Group by user workflows:

```
📁 User Registration Flow
  ├── 1. Check Email Availability
  ├── 2. Create Account
  ├── 3. Send Verification Email
  ├── 4. Verify Email
  └── 5. Complete Profile
```

### By Service

For microservices architectures:

```
📁 Backend Services
  ├── 📂 Auth Service
  ├── 📂 User Service
  ├── 📂 Product Service
  ├── 📂 Order Service
  └── 📂 Payment Service
```

## Collection Actions

### Rename Collection

1. Right-click on collection
2. Select **"Rename"**
3. Enter new name

### Delete Collection

1. Right-click on collection
2. Select **"Delete"**
3. Confirm deletion

:::caution
Deleting a collection permanently removes all requests, folders, and variables inside it.
:::

### Duplicate Collection

1. Right-click on collection
2. Select **"Duplicate"**
3. New collection is created with all contents

Useful for:
- Creating environment copies
- Backing up collections
- Testing changes safely

## Search and Filter

### Search in Collection

Use the search box to find:
- Requests by name
- Requests by URL
- Requests by method
- Folders by name

### Filter Requests

Filter by:
- **Method** – Show only GET, POST, etc.
- **Status** – Show requests with errors
- **Type** – HTTP, GraphQL, or gRPC

## Documenting Collections

### Collection Description

Add documentation to your collection:

```markdown
# E-commerce API Collection

This collection contains all endpoints for the e-commerce platform.

## Authentication
All requests require a Bearer token in the Authorization header.

## Base URL
- Dev: https://dev-api.example.com
- Prod: https://api.example.com

## Rate Limits
- 100 requests per minute
- 10,000 requests per day
```

### Request Descriptions

Document individual requests:

```markdown
## Get User by ID

Retrieves detailed information about a user.

**Parameters:**
- `id` (required) – User ID

**Returns:**
- User object with profile information

**Example Response:**
{
  "id": "123",
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Exporting Collections

### Export Format

Export collections as JSON:

```json
{
  "name": "User API",
  "description": "User management endpoints",
  "variables": {
    "base_url": "https://api.example.com",
    "auth_token": "token123"
  },
  "folders": [
    {
      "name": "Authentication",
      "requests": [...]
    }
  ],
  "requests": [...]
}
```

### Export Steps

1. Right-click on collection
2. Select **"Export Collection"**
3. Choose location to save
4. JSON file is created

### Sharing Collections

Share with teammates:
1. Export collection
2. Send JSON file
3. Teammate imports in their Solo

:::tip
Remove sensitive data like auth tokens before sharing collections.
:::

## Importing Collections

### Import from File

1. Click **"Import"** button
2. Select JSON file
3. Collection is added to Solo

### Import from cURL

Import multiple cURL commands:
1. Click **"Import"** button
2. Paste multiple cURL commands
3. Solo creates requests in a new collection

## Real-World Examples

### Example 1: REST API Collection

```
📁 Blog API
  ├── 📂 Authentication
  │   ├── POST /auth/login
  │   ├── POST /auth/register
  │   └── POST /auth/refresh
  ├── 📂 Posts
  │   ├── GET /posts
  │   ├── GET /posts/:id
  │   ├── POST /posts
  │   ├── PUT /posts/:id
  │   └── DELETE /posts/:id
  ├── 📂 Comments
  │   ├── GET /posts/:id/comments
  │   ├── POST /posts/:id/comments
  │   └── DELETE /comments/:id
  └── 📂 Users
      ├── GET /users/:id
      └── PUT /users/:id
```

Variables:
```
base_url: https://api.blog.com
api_version: v1
auth_token: {{user_token}}
```

### Example 2: GraphQL Collection

```
📁 GitHub GraphQL API
  ├── 📂 Repositories
  │   ├── Get Repository
  │   ├── List Repositories
  │   └── Create Repository
  ├── 📂 Issues
  │   ├── List Issues
  │   ├── Create Issue
  │   └── Update Issue
  └── 📂 Pull Requests
      ├── List PRs
      └── Create PR
```

Variables:
```
endpoint: https://api.github.com/graphql
token: ghp_yourtokenhere
owner: igorvieira
repo: Solo
```

### Example 3: gRPC Collection

```
📁 User gRPC Service
  ├── 📂 User Management
  │   ├── GetUser
  │   ├── CreateUser
  │   ├── UpdateUser
  │   └── DeleteUser
  ├── 📂 Authentication
  │   ├── Login
  │   └── Logout
  └── 📂 Streaming
      ├── StreamUsers
      └── BulkUpdate
```

Variables:
```
server: localhost:50051
auth_metadata: token:abc123
```

### Example 4: Multi-Environment Collection

```
📁 Payment API - Development
Variables: base_url=https://dev-api.pay.com

📁 Payment API - Staging
Variables: base_url=https://staging-api.pay.com

📁 Payment API - Production
Variables: base_url=https://api.pay.com
```

Same requests, different variables.

## Keyboard Shortcuts

- `Cmd/Ctrl + N` – New request in current collection
- `Cmd/Ctrl + Shift + N` – New collection
- `Cmd/Ctrl + F` – Search in collection
- `Cmd/Ctrl + S` – Save request to collection

## Best Practices

### Use Meaningful Names

```
# Good
📁 E-commerce Backend API
  ├── 📂 User Authentication & Authorization
  ├── 📂 Product Catalog Management
  └── 📂 Order Processing

# Less clear
📁 API
  ├── 📂 Auth
  ├── 📂 Products
  └── 📂 Orders
```

### Group by Workflow

Organize requests in the order they're typically called:

```
📁 Checkout Flow
  ├── 1. Get Cart
  ├── 2. Validate Items
  ├── 3. Calculate Shipping
  ├── 4. Process Payment
  ├── 5. Create Order
  └── 6. Send Confirmation
```

### Use Collection Variables

Define common values once:

```
Collection Variables:
  base_url: https://api.example.com
  api_key: your_api_key
  timeout: 30

Requests:
  GET {{base_url}}/users
  POST {{base_url}}/orders
```

### Document Everything

Add descriptions to:
- Collections – Overall purpose
- Folders – What's grouped here
- Requests – What it does, parameters, responses

### Keep Collections Focused

```
# Good – Focused collections
📁 User Service API
📁 Payment Service API
📁 Inventory Service API

# Less organized
📁 All APIs
  ├── Users, Payments, Inventory, Orders...
```

## Troubleshooting

### Collection Not Saving

- Check available disk space
- Ensure Solo has write permissions
- Try exporting as backup

### Missing Requests

- Check if moved to another folder
- Use search to find by name or URL
- Check deleted items (if available)

### Variables Not Working

- Verify variable scope
- Check variable name spelling
- Ensure no circular references

## Next Steps

- [Variables](/docs/variables) – Manage collection variables
- [HTTP Requests](/docs/http-requests) – Create HTTP requests
- [Offline-First](/docs/offline-first) – How collections are stored
- [cURL Integration](/docs/curl) – Import/export collections
