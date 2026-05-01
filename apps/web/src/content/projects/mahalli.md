---
title: Mahalli
description: "Tauri desktop app for small businesses. Manages inventory, customers, quotes, and orders using Nuxt 3, TypeScript, Rust, and SQLite."
tech:
  - Nuxt 3
  - TypeScript
  - Tailwind CSS
  - Tauri
  - SQLite
  - Rust
web: https://mahalli-web.pages.dev/
github: https://github.com/AbdelilahOu/Mahalli
createdAt: "2026-01-15"
published: true
---

Mahalli is a comprehensive desktop application built for small businesses to manage their daily operations. The name "Mahalli" means "local" in Arabic, reflecting its focus on helping local businesses streamline their workflows.

Built with Tauri, the application combines a Nuxt 3 frontend with a Rust backend, delivering native performance while maintaining a modern, responsive UI. SQLite provides reliable local data storage without requiring external database servers.

The application handles the complete business workflow from customer management to quote generation and order tracking. The inventory system includes low-stock alerts, while the reporting features provide insights into sales trends and customer behavior.

## Features

- Complete inventory management with stock tracking
- Customer database with purchase history
- Quote generation and conversion to orders
- Order tracking and fulfillment workflow
- Sales reports and analytics dashboard
- Offline-first architecture with local SQLite storage

## Challenges

- Integrating Nuxt 3 with Tauri IPC for seamless communication
- Designing an intuitive UI for non-technical users
- Implementing efficient SQLite queries for reporting
- Building a printable quote/invoice system
