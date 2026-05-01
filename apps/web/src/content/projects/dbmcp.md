---
title: DBMcp
description: "Golang MCP server for secure PostgreSQL/MySQL connections. Run queries and explore databases programmatically — great for AI-driven testing without a GUI."
tech:
  - Golang
  - MCP
  - PostgreSQL
  - MySQL
github: https://github.com/AbdelilahOu/DBMcp
createdAt: "2026-01-20"
published: true
---

DBMcp is a Model Context Protocol (MCP) server written in Go that enables secure, programmatic access to PostgreSQL and MySQL databases. It was designed to bridge the gap between AI assistants and database operations, allowing for intelligent query execution and schema exploration without requiring a traditional GUI.

The server implements the MCP specification, making it compatible with AI tools that support the protocol. This allows developers to interact with their databases through natural language queries, automated testing scripts, or AI-driven development workflows.

Key design decisions included prioritizing security through parameterized queries, implementing connection pooling for performance, and providing a clean API that abstracts away database-specific differences between PostgreSQL and MySQL.

## Features

- Secure database connections with parameterized queries
- Support for both PostgreSQL and MySQL
- Schema exploration and introspection
- Query execution with result formatting
- MCP protocol compliance for AI integration

## Challenges

- Implementing the MCP protocol specification in Go
- Handling differences between PostgreSQL and MySQL query syntax
- Ensuring security while providing flexible query capabilities
- Optimizing connection pooling for concurrent requests
