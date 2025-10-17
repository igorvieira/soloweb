---
sidebar_position: 6
---

# Variables

Variables in Solo allow you to create reusable, dynamic values across your requests. Use variables to manage different environments, avoid hardcoding values, and keep your API configurations flexible.

## Why Use Variables?

Variables help you:
- ✅ **Avoid repetition** – Define once, use everywhere
- ✅ **Switch environments** – Easily toggle between dev, staging, and production
- ✅ **Keep secrets safe** – Store tokens and API keys in one place
- ✅ **Make requests flexible** – Dynamic values without manual editing

## Creating Variables

### How to Create

1. Click on the **Variables** button in the sidebar (or use the Variables tab)
2. Click **Add Variable** or **"+"**
3. Enter a **key** (variable name)
4. Enter a **value**
5. Variables are saved automatically

### Variable Example

```
Key: base_url
Value: https://api.example.com

Key: auth_token
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Key: user_id
Value: 12345
```

## Using Variables in Requests

Reference variables using double curly braces: `{{variable_name}}`

### In URLs

```
GET https://{{base_url}}/users/{{user_id}}
```

With variables:
- `base_url` = `api.example.com`
- `user_id` = `123`

Becomes:
```
GET https://api.example.com/users/123
```

### In Headers

```
Authorization: Bearer {{auth_token}}
X-API-Key: {{api_key}}
User-Agent: {{app_name}}
```

### In Query Parameters

```
https://{{base_url}}/search?q={{search_term}}&limit={{page_limit}}
```

### In Request Body

```json
{
  "userId": "{{user_id}}",
  "apiKey": "{{api_key}}",
  "environment": "{{env_name}}"
}
```

### In GraphQL

```graphql
query GetUser {
  user(id: "{{user_id}}") {
    id
    name
    email
  }
}
```

Variables tab:
```json
{
  "userId": "{{current_user}}"
}
```

### In gRPC

```json
{
  "id": "{{user_id}}",
  "token": "{{auth_token}}"
}
```

## Variable Scope

Solo supports different variable scopes:

### Global Variables

Available to all requests across all collections:

```
{{base_url}} – Used in all API calls
{{auth_token}} – Shared authentication
{{app_version}} – Global application version
```

### Collection Variables

Available only within a specific collection:

```
{{collection_api_key}} – Specific to this collection
{{collection_base_url}} – Override global base_url
```

### Request Variables

Defined in the Variables tab of a specific request:

```
{{request_specific_value}} – Only for this request
```

### Priority Order

When the same variable exists in multiple scopes:

1. **Request variables** (highest priority)
2. **Collection variables**
3. **Global variables** (lowest priority)

Example:
- Global: `{{base_url}}` = `https://api.example.com`
- Collection: `{{base_url}}` = `https://staging.api.example.com`
- Request will use: `https://staging.api.example.com`

## Environment Management

Use variables to manage multiple environments:

### Development Environment

```
base_url: http://localhost:3000
auth_token: dev_token_123
db_name: dev_database
```

### Staging Environment

```
base_url: https://staging.api.example.com
auth_token: staging_token_456
db_name: staging_database
```

### Production Environment

```
base_url: https://api.example.com
auth_token: prod_token_789
db_name: prod_database
```

### Switching Environments

1. Create a variable set for each environment
2. Save them as different collections or use comments
3. Toggle variables by changing values
4. All requests automatically use the active environment

:::tip
Create a collection for each environment to quickly switch between dev, staging, and production.
:::

## Common Variable Patterns

### API Base URL

```
{{base_url}} = https://api.example.com
```

Use in requests:
```
GET {{base_url}}/users
POST {{base_url}}/posts
DELETE {{base_url}}/comments/{{comment_id}}
```

### Authentication Token

```
{{auth_token}} = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Use in headers:
```
Authorization: Bearer {{auth_token}}
```

### Resource IDs

```
{{user_id}} = 123
{{post_id}} = 456
{{comment_id}} = 789
```

Use in URLs:
```
GET {{base_url}}/users/{{user_id}}/posts/{{post_id}}
```

### API Version

```
{{api_version}} = v1
```

Use in URLs:
```
GET {{base_url}}/{{api_version}}/users
```

### Pagination

```
{{page}} = 1
{{limit}} = 20
{{offset}} = 0
```

Use in queries:
```
GET {{base_url}}/users?page={{page}}&limit={{limit}}
```

## Dynamic Variables

Solo supports special dynamic variables that generate values automatically:

### Timestamp Variables

```
{{$timestamp}} – Current Unix timestamp (seconds)
{{$timestamp_ms}} – Current timestamp in milliseconds
```

Example:
```json
{
  "createdAt": {{$timestamp}},
  "requestTime": {{$timestamp_ms}}
}
```

### Random Variables

```
{{$randomInt}} – Random integer
{{$randomUUID}} – Random UUID v4
{{$randomString}} – Random alphanumeric string
```

Example:
```json
{
  "id": "{{$randomUUID}}",
  "code": "{{$randomInt}}",
  "token": "{{$randomString}}"
}
```

### Date Variables

```
{{$date}} – Current date (YYYY-MM-DD)
{{$datetime}} – Current datetime (ISO 8601)
```

Example:
```json
{
  "date": "{{$date}}",
  "timestamp": "{{$datetime}}"
}
```

## Advanced Usage

### Nested Variables

Variables can reference other variables:

```
{{api_url}} = https://{{domain}}/{{api_version}}
{{domain}} = api.example.com
{{api_version}} = v1
```

Result: `https://api.example.com/v1`

### Concatenated Variables

Combine variables with text:

```
GET {{base_url}}/api/{{version}}/users/{{user_id}}/profile
```

### Variable Substitution in Descriptions

Use variables in request descriptions:

```markdown
This request fetches user {{user_id}} from {{environment}} environment.

Base URL: {{base_url}}
Auth: {{auth_type}}
```

## Managing Variables

### View All Variables

1. Click on the **Variables** tab
2. See all defined variables
3. Edit or delete as needed

### Search Variables

Use the search box to find variables by key or value:

```
Search: "auth" → Shows all auth-related variables
Search: "prod" → Shows production variables
```

### Export Variables

Export variables for backup or sharing:
1. Click **Export Variables**
2. Save as JSON file
3. Share with team or keep as backup

Example export:
```json
{
  "base_url": "https://api.example.com",
  "auth_token": "token123",
  "user_id": "12345"
}
```

### Import Variables

Import variables from a file:
1. Click **Import Variables**
2. Select JSON file
3. Choose to merge or replace existing variables

## Security Best Practices

### Sensitive Data

For sensitive variables like API keys and tokens:

- ✅ Use variables instead of hardcoding
- ✅ Store in Solo (local, offline storage)
- ✅ Don't commit to version control
- ❌ Don't include in exported collections

### Token Rotation

When rotating tokens:
1. Update the variable value
2. All requests automatically use new token
3. No need to edit individual requests

### Separate Environments

Keep production credentials separate:
- Use different collections for each environment
- Never mix dev and prod variables
- Document which variables are for which environment

## Debugging with Variables

### View Resolved Values

Before sending a request, Solo shows the resolved values:

Request:
```
GET {{base_url}}/users/{{user_id}}
```

Preview:
```
GET https://api.example.com/users/123
```

### Missing Variables

Solo warns you when variables are undefined:

```
⚠️ Variable '{{missing_var}}' is not defined
```

### Variable Autocomplete

Start typing `{{` and Solo suggests available variables:

```
{{b → Suggests: base_url, backend_url, bearer_token
```

## Examples

### Example 1: User Management API

Variables:
```
base_url: https://api.example.com
auth_token: abc123
admin_id: 1
```

Requests:
```
GET {{base_url}}/users
Authorization: Bearer {{auth_token}}

POST {{base_url}}/users
Authorization: Bearer {{auth_token}}
Body: {"name": "John", "createdBy": "{{admin_id}}"}

GET {{base_url}}/users/{{admin_id}}
Authorization: Bearer {{auth_token}}
```

### Example 2: Multi-Environment Setup

Dev variables:
```
env: development
base_url: http://localhost:3000
db_name: dev_db
debug: true
```

Prod variables:
```
env: production
base_url: https://api.example.com
db_name: prod_db
debug: false
```

Request:
```
POST {{base_url}}/logs
Body: {
  "environment": "{{env}}",
  "database": "{{db_name}}",
  "debug": {{debug}}
}
```

### Example 3: Pagination Workflow

Variables:
```
base_url: https://api.example.com
page: 1
limit: 20
```

Request:
```
GET {{base_url}}/users?page={{page}}&limit={{limit}}
```

To get the next page, just update `page` variable to `2`.

## Keyboard Shortcuts

Work faster with variables:

- `Cmd/Ctrl + E` – Open variables editor
- `{{` – Start variable autocomplete
- `Tab` – Accept autocomplete suggestion

## Best Practices

### Use Descriptive Names

```
# Good
{{api_base_url}}
{{auth_bearer_token}}
{{current_user_id}}

# Less clear
{{url}}
{{token}}
{{id}}
```

### Group Related Variables

```
# API Configuration
{{api_base_url}}
{{api_version}}
{{api_timeout}}

# Authentication
{{auth_type}}
{{auth_token}}
{{auth_expires}}

# User Context
{{user_id}}
{{user_email}}
{{user_role}}
```

### Document Variables

Add comments or use descriptions:

```
{{base_url}} – API base URL for current environment
{{auth_token}} – Bearer token (expires in 24h)
{{user_id}} – Current authenticated user ID
```

### Keep Variables DRY

Don't repeat values:

```
# Good
{{api_url}} = https://{{domain}}/{{version}}
{{domain}} = api.example.com
{{version}} = v1

# Repetitive
{{users_url}} = https://api.example.com/v1/users
{{posts_url}} = https://api.example.com/v1/posts
{{comments_url}} = https://api.example.com/v1/comments
```

## Troubleshooting

### Variable Not Substituted

**Problem:** Request shows `{{variable}}` instead of value

**Solutions:**
- Check variable is defined
- Verify variable name spelling
- Ensure no extra spaces: `{{ variable }}` won't work

### Wrong Value Used

**Problem:** Variable uses unexpected value

**Solutions:**
- Check variable scope priority
- Verify no override in collection or request
- Review variable list for duplicates

### Circular References

**Problem:** Variables reference each other in a loop

**Example:**
```
{{var1}} = {{var2}}
{{var2}} = {{var1}}
```

**Solution:** Remove circular reference

## Next Steps

- [HTTP Requests](/docs/http-requests) – Use variables in HTTP calls
- [GraphQL](/docs/graphql) – Use variables in GraphQL queries
- [Collections](/docs/collections) – Organize variables by collection
- [Offline-First](/docs/offline-first) – How variables are stored locally
