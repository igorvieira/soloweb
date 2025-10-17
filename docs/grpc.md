---
sidebar_position: 4
---

# gRPC

Solo provides comprehensive support for testing and debugging gRPC services with schema introspection and request building.

## What is gRPC?

gRPC is a high-performance, open-source framework for remote procedure calls (RPC). It uses Protocol Buffers (protobuf) for serialization and HTTP/2 for transport. Solo makes it easy to work with gRPC services without writing code.

## Creating a gRPC Request

1. Click the **"+"** button in the sidebar
2. Select **gRPC** as the request type
3. Enter your gRPC server address
4. Load your `.proto` file or let Solo discover services
5. Select a method and build your request
6. Click **Send** to invoke the RPC

## Server Connection

### Server Address Format

Enter your gRPC server address:

```
localhost:50051
grpc.example.com:443
```

### TLS/SSL Connection

For secure connections:
- Use port `443` or your custom TLS port
- Solo automatically handles TLS handshake
- Provide certificates if required by your server

## Loading Proto Files

gRPC services are defined using Protocol Buffer files (`.proto`). Solo needs these definitions to understand your service.

### Method 1: Server Reflection

If your gRPC server has reflection enabled:

1. Enter the server address
2. Click **Fetch Schema** or **Discover Services**
3. Solo automatically retrieves service definitions

### Method 2: Upload Proto File

If reflection is not available:

1. Click **Load Proto File**
2. Select your `.proto` file from your computer
3. Solo parses the file and shows available services

Example `.proto` file:

```protobuf
syntax = "proto3";

package user;

service UserService {
  rpc GetUser (GetUserRequest) returns (User) {}
  rpc CreateUser (CreateUserRequest) returns (User) {}
  rpc ListUsers (ListUsersRequest) returns (ListUsersResponse) {}
}

message GetUserRequest {
  string id = 1;
}

message User {
  string id = 1;
  string name = 2;
  string email = 3;
  int32 age = 4;
}

message CreateUserRequest {
  string name = 1;
  string email = 2;
  int32 age = 3;
}

message ListUsersRequest {
  int32 page = 1;
  int32 limit = 2;
}

message ListUsersResponse {
  repeated User users = 1;
  int32 total = 2;
}
```

## Browsing Services

Once the schema is loaded, browse available services:

### Service List

View all services and their methods:

```
UserService
├── GetUser
├── CreateUser
└── ListUsers

ProductService
├── GetProduct
├── CreateProduct
└── DeleteProduct
```

### Method Details

Click on a method to see:
- **Request message** structure
- **Response message** structure
- **Field types** and requirements
- **Method type** (unary, streaming, etc.)

## Building Requests

### Request Editor

Solo provides a JSON-based editor for building gRPC requests:

```json
{
  "id": "user_123"
}
```

### Field Types

Solo supports all Protocol Buffer types:

**Scalar Types:**
```json
{
  "string_field": "text",
  "int32_field": 42,
  "int64_field": "9007199254740991",
  "float_field": 3.14,
  "double_field": 3.141592653589793,
  "bool_field": true
}
```

**Repeated Fields (Arrays):**
```json
{
  "tags": ["tag1", "tag2", "tag3"],
  "numbers": [1, 2, 3, 4, 5]
}
```

**Nested Messages:**
```json
{
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "address": {
      "street": "123 Main St",
      "city": "San Francisco",
      "country": "USA"
    }
  }
}
```

**Maps:**
```json
{
  "metadata": {
    "key1": "value1",
    "key2": "value2"
  }
}
```

**Enums:**
```json
{
  "status": "ACTIVE",
  "role": "ADMIN"
}
```

## Method Types

gRPC supports different method types:

### Unary RPC

Simple request-response (most common):

```protobuf
rpc GetUser (GetUserRequest) returns (User) {}
```

Request:
```json
{
  "id": "123"
}
```

Response:
```json
{
  "id": "123",
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Server Streaming RPC

Server sends multiple responses:

```protobuf
rpc ListUsers (ListUsersRequest) returns (stream User) {}
```

Solo displays each response as it arrives in real-time.

### Client Streaming RPC

Client sends multiple requests:

```protobuf
rpc UploadUsers (stream User) returns (UploadSummary) {}
```

Add multiple messages in Solo's request builder.

### Bidirectional Streaming RPC

Both client and server stream:

```protobuf
rpc Chat (stream ChatMessage) returns (stream ChatMessage) {}
```

Send and receive messages in real-time.

## Metadata (Headers)

Add gRPC metadata (similar to HTTP headers):

1. Click on the **Metadata** tab
2. Add key-value pairs
3. Common metadata:
   - `authorization: Bearer <token>`
   - `api-key: <your_key>`
   - `user-agent: Solo gRPC Client`

Example:
```json
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIs...",
  "trace-id": "abc-123-xyz"
}
```

## Response Viewer

### Successful Response

Responses are displayed with JSON formatting:

```json
{
  "id": "123",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "created_at": "2024-01-01T00:00:00Z"
}
```

### Error Responses

gRPC errors include:
- **Status code** (OK, NOT_FOUND, PERMISSION_DENIED, etc.)
- **Error message**
- **Error details** (if provided)

Example error:
```
Status: NOT_FOUND
Message: User with id '999' not found
```

### Response Metadata

View response metadata (trailers):
- Timing information
- Server-sent headers
- Custom metadata

## Schema Viewer

Browse the complete gRPC schema:

### View Services

```
Services
├── UserService
│   ├── GetUser (GetUserRequest) → User
│   ├── CreateUser (CreateUserRequest) → User
│   └── ListUsers (ListUsersRequest) → ListUsersResponse
└── AuthService
    ├── Login (LoginRequest) → LoginResponse
    └── Logout (LogoutRequest) → Empty
```

### View Messages

```
Messages
├── User
│   ├── id: string
│   ├── name: string
│   ├── email: string
│   └── age: int32
└── GetUserRequest
    └── id: string
```

### View Enums

```
Enums
└── UserStatus
    ├── ACTIVE = 0
    ├── INACTIVE = 1
    └── SUSPENDED = 2
```

## Using Variables

Use Solo variables in your gRPC requests:

```json
{
  "id": "{{user_id}}",
  "api_key": "{{api_key}}"
}
```

Solo substitutes variables before sending the request.

Learn more in the [Variables documentation](/docs/variables).

## Authentication

### Metadata-based Auth

Add authentication via metadata:

```json
{
  "authorization": "Bearer {{auth_token}}"
}
```

### TLS Client Certificates

For mutual TLS (mTLS):
1. Configure client certificates in settings
2. Solo presents certificates during TLS handshake
3. Server validates client identity

## Working with Timestamps

Protocol Buffers have special types for timestamps:

```json
{
  "created_at": "2024-01-01T12:00:00Z",
  "updated_at": "2024-01-15T15:30:00.500Z"
}
```

Solo automatically formats timestamps correctly.

## Advanced Features

### Well-Known Types

Solo supports Protocol Buffer well-known types:

**Timestamp:**
```json
{
  "created_at": "2024-01-01T00:00:00Z"
}
```

**Duration:**
```json
{
  "timeout": "30s"
}
```

**Empty:**
```json
{}
```

**Any:**
```json
{
  "@type": "type.googleapis.com/user.User",
  "id": "123",
  "name": "John"
}
```

### Request Templates

Save common requests as templates:
1. Configure your request
2. Save it with a descriptive name
3. Reuse for similar API calls

## Best Practices

### Organize gRPC Services

- Group related services into folders
- Use descriptive names for saved requests
- Document expected responses

### Use Reflection When Possible

- Enable server reflection in development
- Makes testing easier without proto files
- Automatically stays up-to-date with changes

### Test Error Cases

Test various scenarios:
- Invalid input data
- Missing required fields
- Authentication failures
- Server errors

### Document Your Requests

Use the Description tab to:
- Explain what the RPC does
- Document expected inputs
- Note any side effects
- Add example responses

## Troubleshooting

### Cannot Connect to Server

- Verify server address and port
- Check if server is running
- Ensure firewall allows connections
- Try `localhost` vs `127.0.0.1`

### Proto File Loading Errors

- Verify proto file syntax
- Check for import statements
- Ensure all dependencies are included
- Validate field numbers are unique

### Schema Not Available

- Enable server reflection if possible
- Load proto file manually
- Check server documentation
- Verify gRPC server is configured correctly

### Authentication Errors

- Verify metadata keys match server expectations
- Check token format and validity
- Ensure TLS certificates are valid
- Confirm authentication method

## Example: Testing a User Service

### Service Definition

```protobuf
service UserService {
  rpc GetUser (GetUserRequest) returns (User) {}
  rpc CreateUser (CreateUserRequest) returns (User) {}
  rpc UpdateUser (UpdateUserRequest) returns (User) {}
  rpc DeleteUser (DeleteUserRequest) returns (Empty) {}
}
```

### GetUser Request

```json
{
  "id": "user_123"
}
```

### CreateUser Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "role": "ADMIN"
}
```

### UpdateUser Request

```json
{
  "id": "user_123",
  "name": "John Updated",
  "email": "john.new@example.com"
}
```

## Next Steps

- [Variables](/docs/variables) – Use dynamic values in gRPC requests
- [Collections](/docs/collections) – Organize gRPC services
- [HTTP Requests](/docs/http-requests) – Test REST APIs
- [GraphQL](/docs/graphql) – Test GraphQL APIs
