---
sidebar_position: 2
---

# HTTP Requests

Learn how to make HTTP requests with Solo to test and debug your REST APIs.

## Creating a New HTTP Request

1. Click the **"+"** button in the sidebar or use the keyboard shortcut
2. Select **HTTP** as the request type
3. Enter your API endpoint URL
4. Choose the HTTP method (GET, POST, PUT, PATCH, DELETE)
5. Click **Send** to execute the request

## HTTP Methods

Solo supports all standard HTTP methods:

### GET
Retrieve data from an API endpoint.

```
GET https://api.example.com/users
```

### POST
Create new resources on the server.

```
POST https://api.example.com/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### PUT
Update an existing resource completely.

```
PUT https://api.example.com/users/123
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```

### PATCH
Partially update an existing resource.

```
PATCH https://api.example.com/users/123
Content-Type: application/json

{
  "email": "newemail@example.com"
}
```

### DELETE
Remove a resource from the server.

```
DELETE https://api.example.com/users/123
```

## Request Configuration

### URL and Query Parameters

Enter your API endpoint in the URL field. Query parameters can be added in two ways:

**Inline in URL:**
```
https://api.example.com/search?q=solo&limit=10
```

**Using the Query Params tab:**
1. Click on the **Query Params** tab
2. Add key-value pairs for your parameters
3. Toggle individual parameters on/off using checkboxes

Example:
- Key: `q` → Value: `solo`
- Key: `limit` → Value: `10`

### Headers

Add custom headers to your requests:

1. Click on the **Headers** tab
2. Add header key-value pairs
3. Common headers:
   - `Content-Type: application/json`
   - `Accept: application/json`
   - `User-Agent: Solo HTTP Client`

### Request Body

For POST, PUT, and PATCH requests, add a request body:

1. Click on the **Body** tab
2. Select the body type:
   - **JSON** – For JSON payloads (most common)
   - **Text** – For plain text
   - **Form Data** – For form submissions
3. Enter your request body content

**JSON Example:**
```json
{
  "title": "New Post",
  "body": "This is the post content",
  "userId": 1
}
```

## Authentication

Solo supports multiple authentication methods:

### Bearer Token

1. Click on the **Auth** tab
2. Select **Bearer Token** from the dropdown
3. Enter your access token
4. Solo automatically adds the `Authorization: Bearer <token>` header

Example:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Basic Auth

1. Click on the **Auth** tab
2. Select **Basic Auth** from the dropdown
3. Enter your username and password
4. Solo encodes credentials and adds the `Authorization: Basic <encoded>` header

### No Auth

Select **No Auth** if the API endpoint is public or uses custom authentication.

## Response Viewer

After sending a request, Solo displays the response:

### Response Tabs

- **Body** – View the response content with syntax highlighting
- **Headers** – Inspect response headers
- **Metadata** – See request timing, status code, and size

### Response Body Formats

Solo automatically detects and formats:
- **JSON** – Pretty-printed with syntax highlighting
- **HTML** – Rendered preview
- **XML** – Formatted with proper indentation
- **Plain Text** – Raw response

### Status Codes

Solo displays the HTTP status code with color coding:
- 🟢 **2xx** – Success (green)
- 🟡 **3xx** – Redirection (yellow)
- 🔴 **4xx** – Client Error (red)
- 🔴 **5xx** – Server Error (red)

## Advanced Features

### Variable Substitution

Use variables in your requests for dynamic values:

```
GET https://{{base_url}}/users/{{user_id}}
Authorization: Bearer {{auth_token}}
```

Learn more in the [Variables documentation](/docs/variables).

### Copy as cURL

Export any request as a cURL command:

1. Configure your request
2. Click the **Copy as cURL** button
3. Paste into your terminal or share with teammates

Example output:
```bash
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer token123" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

Learn more in the [cURL Integration documentation](/docs/curl).

### Request Description

Document your API requests:

1. Click on the **Description** tab
2. Add notes about what the request does
3. Document expected responses or usage examples
4. All descriptions are saved locally

## Keyboard Shortcuts

Work faster with keyboard shortcuts:

- `Cmd/Ctrl + Enter` – Send request
- `Cmd/Ctrl + S` – Save request
- `Cmd/Ctrl + N` – New request
- `Cmd/Ctrl + K` – Focus URL input

View all shortcuts by clicking the keyboard icon in the title bar.

## Best Practices

### Organize Your Requests

- Group related requests into folders
- Use descriptive names for your requests
- Add descriptions to document API behavior

### Use Variables

- Define variables for base URLs, tokens, and IDs
- Switch between environments easily
- Keep sensitive data in variables, not hardcoded

### Save Request History

All requests are automatically saved locally, so you can:
- Review previous API calls
- Replay requests with the same configuration
- Track API changes over time

## Troubleshooting

### Common Issues

**CORS Errors**
- CORS restrictions apply when testing APIs from the browser
- Use the native desktop app for full functionality without CORS limitations

**Connection Refused**
- Verify the API endpoint URL is correct
- Check if the API server is running
- Ensure no firewall is blocking the connection

**Timeout Errors**
- Increase the timeout in settings if needed
- Check if the API endpoint is responsive
- Verify network connectivity

## Next Steps

- [GraphQL Requests](/docs/graphql) – Test GraphQL APIs
- [Variables](/docs/variables) – Use dynamic variables in requests
- [Collections](/docs/collections) – Organize requests into folders
- [cURL Integration](/docs/curl) – Import and export cURL commands
