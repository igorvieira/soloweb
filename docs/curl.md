---
sidebar_position: 5
---

# cURL Integration

Solo provides seamless integration with cURL, allowing you to import existing cURL commands and export your requests as cURL for use in terminals or scripts.

## What is cURL?

cURL is a command-line tool for making HTTP requests. It's widely used for:
- Testing APIs from the terminal
- Automating HTTP requests in scripts
- Sharing API examples in documentation
- Debugging network issues

## Exporting Requests as cURL

Convert any Solo request into a cURL command instantly.

### How to Export

1. Configure your HTTP request in Solo
2. Click the **"Copy as cURL"** button (clipboard icon)
3. The cURL command is copied to your clipboard
4. Paste into your terminal or documentation

### Export Examples

**Simple GET Request:**

Solo request:
```
GET https://api.example.com/users
```

Exported cURL:
```bash
curl -X GET "https://api.example.com/users"
```

**POST Request with JSON Body:**

Solo request:
```
POST https://api.example.com/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

Exported cURL:
```bash
curl -X POST "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -d '{
  "name": "John Doe",
  "email": "john@example.com"
}'
```

**Request with Authentication:**

Solo request:
```
GET https://api.example.com/protected
Authorization: Bearer abc123token
```

Exported cURL:
```bash
curl -X GET "https://api.example.com/protected" \
  -H "Authorization: Bearer abc123token"
```

**Request with Query Parameters:**

Solo request:
```
GET https://api.example.com/search?q=solo&limit=10
```

Exported cURL:
```bash
curl -X GET "https://api.example.com/search?q=solo&limit=10"
```

**Request with Multiple Headers:**

Solo request:
```
POST https://api.example.com/data
Content-Type: application/json
Accept: application/json
X-API-Key: secret123
User-Agent: Solo HTTP Client

{"data": "value"}
```

Exported cURL:
```bash
curl -X POST "https://api.example.com/data" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "X-API-Key: secret123" \
  -H "User-Agent: Solo HTTP Client" \
  -d '{"data": "value"}'
```

## Importing cURL Commands

Paste any cURL command directly into Solo to create a request.

### How to Import

1. Copy a cURL command from documentation or terminal
2. Click the **"Import cURL"** button or use the keyboard shortcut
3. Paste the cURL command
4. Solo automatically parses and creates the request

### Import Examples

**Import Basic cURL:**

```bash
curl https://api.example.com/users
```

Creates:
- Method: GET
- URL: https://api.example.com/users

**Import with Headers:**

```bash
curl -H "Authorization: Bearer token123" \
     -H "Content-Type: application/json" \
     https://api.example.com/data
```

Creates:
- Method: GET
- URL: https://api.example.com/data
- Headers:
  - Authorization: Bearer token123
  - Content-Type: application/json

**Import POST with Data:**

```bash
curl -X POST https://api.example.com/users \
  -d '{"name":"John","email":"john@example.com"}'
```

Creates:
- Method: POST
- URL: https://api.example.com/users
- Body: `{"name":"John","email":"john@example.com"}`

**Import with --data flag:**

```bash
curl --request POST \
  --url https://api.example.com/users \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "John Doe",
    "email": "john@example.com"
  }'
```

Solo automatically parses all flags and creates the request.

## Supported cURL Flags

Solo supports the most common cURL flags:

### Request Method
```bash
-X POST
--request POST
```

### Headers
```bash
-H "Content-Type: application/json"
--header "Authorization: Bearer token"
```

### Request Body
```bash
-d '{"key":"value"}'
--data '{"key":"value"}'
--data-raw '{"key":"value"}'
```

### URL
```bash
"https://api.example.com/endpoint"
--url https://api.example.com/endpoint
```

### Basic Auth
```bash
-u username:password
--user username:password
```

### Follow Redirects
```bash
-L
--location
```

### Custom Request
```bash
--request PATCH
-X DELETE
```

## Working with Variables

Use Solo variables in exported cURL commands:

Solo request:
```
GET https://{{base_url}}/users/{{user_id}}
Authorization: Bearer {{auth_token}}
```

Exported cURL:
```bash
curl -X GET "https://api.example.com/users/123" \
  -H "Authorization: Bearer abc123token"
```

Solo substitutes variables before generating the cURL command.

:::tip
Define variables for different environments (dev, staging, production) and export cURL commands with the correct values automatically.
:::

## Use Cases

### Share API Examples

Export requests as cURL to:
- Include in API documentation
- Share with teammates
- Post in support tickets
- Add to README files

### Integrate with CI/CD

Export cURL commands for:
- Automated testing scripts
- Deployment health checks
- Monitoring systems
- Build pipelines

Example in a bash script:
```bash
#!/bin/bash

# Health check exported from Solo
response=$(curl -X GET "https://api.example.com/health" -w "%{http_code}" -o /dev/null -s)

if [ $response -eq 200 ]; then
  echo "API is healthy"
else
  echo "API health check failed with status: $response"
  exit 1
fi
```

### Debug in Terminal

Export and run cURL commands to:
- Test from different machines
- Debug network issues
- Test from servers
- Verify firewall rules

### Copy from Browser DevTools

Import cURL from browser:
1. Open Browser DevTools (F12)
2. Go to Network tab
3. Right-click on any request
4. Select "Copy as cURL"
5. Paste into Solo's Import dialog

## Advanced cURL Features

### Form Data

Solo supports form data in cURL:

```bash
curl -X POST https://api.example.com/upload \
  -F "file=@/path/to/file.txt" \
  -F "name=document"
```

### Custom Headers with Special Characters

```bash
curl -X POST https://api.example.com/data \
  -H "X-Custom-Header: value with spaces" \
  -H "Authorization: Bearer token_with-special.chars"
```

### Multiple Data Parameters

```bash
curl -X POST https://api.example.com/form \
  -d "param1=value1" \
  -d "param2=value2" \
  -d "param3=value3"
```

## Tips & Best Practices

### Always Include Method

Even for GET requests, explicitly specify the method:
```bash
# Good
curl -X GET "https://api.example.com/users"

# Works but less clear
curl "https://api.example.com/users"
```

### Quote URLs

Always quote URLs to handle special characters:
```bash
# Good
curl -X GET "https://api.example.com/search?q=hello world"

# May fail
curl -X GET https://api.example.com/search?q=hello world
```

### Format for Readability

Use backslashes for multi-line commands:
```bash
curl -X POST "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer token" \
  -d '{"name":"John"}'
```

### Escape JSON Properly

Use single quotes for JSON data:
```bash
# Good
-d '{"key":"value"}'

# May fail with double quotes
-d "{\"key\":\"value\"}"
```

## Common Issues & Solutions

### Special Characters in URL

**Problem:**
```bash
curl https://api.example.com/search?q=hello world
```

**Solution:**
```bash
curl "https://api.example.com/search?q=hello%20world"
# or
curl "https://api.example.com/search?q=hello+world"
```

### JSON Parsing Errors

**Problem:**
```bash
curl -d "{key: value}"  # Invalid JSON
```

**Solution:**
```bash
curl -d '{"key":"value"}'  # Valid JSON
```

### Headers Not Working

**Problem:**
```bash
curl -H Content-Type: application/json  # Missing quotes
```

**Solution:**
```bash
curl -H "Content-Type: application/json"
```

## Keyboard Shortcuts

Speed up your workflow:

- `Cmd/Ctrl + Shift + C` – Copy as cURL
- `Cmd/Ctrl + Shift + V` – Import from cURL
- `Cmd/Ctrl + C` – Copy response

## Examples from Popular APIs

### GitHub API

```bash
curl -X GET "https://api.github.com/repos/igorvieira/Solo" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Stripe API

```bash
curl -X POST "https://api.stripe.com/v1/customers" \
  -u "sk_test_YOUR_KEY:" \
  -d "email=customer@example.com" \
  -d "name=John Doe"
```

### OpenAI API

```bash
curl -X POST "https://api.openai.com/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

## Next Steps

- [Variables](/docs/variables) – Use dynamic values in requests
- [HTTP Requests](/docs/http-requests) – Learn about HTTP features
- [Collections](/docs/collections) – Organize your requests
- [Offline-First](/docs/offline-first) – Understand data storage
