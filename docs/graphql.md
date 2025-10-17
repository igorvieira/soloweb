---
sidebar_position: 3
---

# GraphQL

Solo provides full support for GraphQL APIs with schema introspection, query validation, and an intuitive editor.

## Creating a GraphQL Request

1. Click the **"+"** button in the sidebar
2. Select **GraphQL** as the request type
3. Enter your GraphQL endpoint URL
4. Write your query or mutation
5. Click **Send** to execute

## GraphQL Query Editor

The GraphQL editor provides syntax highlighting and intelligent features:

### Writing Queries

```graphql
query GetUser {
  user(id: "123") {
    id
    name
    email
    posts {
      title
      createdAt
    }
  }
}
```

### Writing Mutations

```graphql
mutation CreatePost {
  createPost(input: {
    title: "New Post"
    body: "Post content"
    userId: "123"
  }) {
    id
    title
    createdAt
  }
}
```

### Using Fragments

```graphql
fragment UserFields on User {
  id
  name
  email
}

query GetUsers {
  users {
    ...UserFields
  }
}
```

## Query Variables

Define variables for dynamic values in your queries:

### In the Query

```graphql
query GetUser($userId: ID!) {
  user(id: $userId) {
    id
    name
    email
  }
}
```

### In the Variables Tab

Click on the **Variables** tab and add your variables as JSON:

```json
{
  "userId": "123"
}
```

## Schema Introspection

Solo can automatically fetch and display your GraphQL schema:

### Fetching the Schema

1. Enter your GraphQL endpoint URL
2. Click the **Fetch Schema** button (or it happens automatically)
3. The schema is downloaded and cached locally

### Viewing the Schema

Click on the **Schema** tab to browse:

- **Types** – View all GraphQL types
- **Queries** – Available query operations
- **Mutations** – Available mutation operations
- **Subscriptions** – Available subscription operations (if supported)

### Schema Documentation

Each type, field, and argument includes:
- Type information
- Description (if provided by the API)
- Required vs optional fields
- Default values

Example schema view:

```
Query
├── user(id: ID!): User
├── users(limit: Int, offset: Int): [User!]!
└── posts(userId: ID): [Post!]!

User
├── id: ID!
├── name: String!
├── email: String!
└── posts: [Post!]!
```

## Authentication

GraphQL endpoints often require authentication:

### Bearer Token

1. Click on the **Auth** tab
2. Select **Bearer Token**
3. Enter your API token
4. Solo adds the header automatically

```
Authorization: Bearer your_token_here
```

### Custom Headers

Add custom authentication headers:

1. Click on the **Headers** tab
2. Add your authentication header
3. Common examples:
   - `Authorization: Bearer <token>`
   - `X-API-Key: <key>`
   - `Cookie: session=<value>`

## Response Viewer

GraphQL responses are displayed with formatting:

### Successful Response

```json
{
  "data": {
    "user": {
      "id": "123",
      "name": "John Doe",
      "email": "john@example.com",
      "posts": [
        {
          "title": "First Post",
          "createdAt": "2024-01-01"
        }
      ]
    }
  }
}
```

### Error Response

GraphQL errors are clearly displayed:

```json
{
  "errors": [
    {
      "message": "User not found",
      "locations": [{ "line": 2, "column": 3 }],
      "path": ["user"]
    }
  ]
}
```

## Advanced Features

### Query Autocomplete

The GraphQL editor provides autocomplete based on the schema:

- Type field names and press `Ctrl+Space` for suggestions
- See available fields for each type
- View field descriptions inline

### Query Validation

Solo validates your query against the schema:

- ❌ Invalid field names are highlighted
- ❌ Type mismatches are caught before sending
- ✅ Valid queries are marked clearly

### Operation Selection

If you have multiple operations in one query:

```graphql
query GetUser {
  user(id: "123") { name }
}

query GetPosts {
  posts { title }
}
```

Select which operation to execute from the dropdown.

## Working with Variables

### Solo Variables in GraphQL

Use Solo's variable system with GraphQL:

```graphql
query GetUser($userId: ID!) {
  user(id: $userId) {
    id
    name
  }
}
```

Variables tab:
```json
{
  "userId": "{{current_user_id}}"
}
```

Solo will substitute `{{current_user_id}}` with your defined variable value.

Learn more in the [Variables documentation](/docs/variables).

## Common GraphQL Patterns

### Pagination

```graphql
query GetUsers($limit: Int!, $offset: Int!) {
  users(limit: $limit, offset: $offset) {
    id
    name
    email
  }
  usersCount
}
```

Variables:
```json
{
  "limit": 10,
  "offset": 0
}
```

### Nested Queries

```graphql
query GetUserWithPosts {
  user(id: "123") {
    id
    name
    posts {
      id
      title
      comments {
        id
        text
        author {
          name
        }
      }
    }
  }
}
```

### Aliases

```graphql
query GetMultipleUsers {
  user1: user(id: "123") {
    name
  }
  user2: user(id: "456") {
    name
  }
}
```

### Directives

```graphql
query GetUser($includeEmail: Boolean!) {
  user(id: "123") {
    id
    name
    email @include(if: $includeEmail)
  }
}
```

## Documenting GraphQL APIs

Use the **Description** tab to document your queries:

- Explain what the query does
- Document expected variables
- Note any special requirements
- Add example responses

All documentation is stored locally with your request.

## Tips & Best Practices

### Use Descriptive Operation Names

```graphql
# Good
query GetUserDashboardData {
  user { ... }
}

# Less clear
query {
  user { ... }
}
```

### Request Only What You Need

GraphQL lets you specify exactly which fields to return:

```graphql
# Efficient
query GetUserName {
  user(id: "123") {
    name
  }
}

# Less efficient
query GetUser {
  user(id: "123") {
    id
    name
    email
    address
    phone
    # ... many fields you don't need
  }
}
```

### Use Fragments for Reusability

```graphql
fragment PostPreview on Post {
  id
  title
  excerpt
  createdAt
}

query GetRecentPosts {
  recentPosts {
    ...PostPreview
  }
}

query GetUserPosts {
  user(id: "123") {
    posts {
      ...PostPreview
    }
  }
}
```

## Troubleshooting

### Schema Not Loading

- Verify the GraphQL endpoint URL is correct
- Check if the endpoint supports introspection
- Some APIs disable introspection in production

### Query Validation Errors

- Ensure all required fields are included
- Check variable types match the schema
- Verify field names are spelled correctly

### Authentication Issues

- Confirm the auth token is valid
- Check if the token needs to be refreshed
- Verify the correct authentication method is used

## Testing Popular GraphQL APIs

### GitHub GraphQL API

```graphql
query GetRepository {
  repository(owner: "igorvieira", name: "Solo") {
    name
    description
    stargazerCount
    forkCount
  }
}
```

Endpoint: `https://api.github.com/graphql`
Auth: Bearer Token (Personal Access Token)

### Shopify Admin API

```graphql
query GetProducts {
  products(first: 10) {
    edges {
      node {
        id
        title
        description
      }
    }
  }
}
```

Endpoint: `https://{shop}.myshopify.com/admin/api/2024-01/graphql.json`
Auth: Custom header `X-Shopify-Access-Token`

## Next Steps

- [gRPC](/docs/grpc) – Test gRPC services
- [Variables](/docs/variables) – Use dynamic variables
- [Collections](/docs/collections) – Organize GraphQL queries
- [HTTP Requests](/docs/http-requests) – Test REST APIs
