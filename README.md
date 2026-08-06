# Carlos Indriago | Software Engineer

A performance-focused, modern portfolio website built with **Astro**, **TypeScript**, and **TailwindCSS**, showcasing production-grade software engineering projects, system architectures, and technical case studies.

Live site: [carlosindriago.github.io](https://carlosindriago.github.io)

---

## 🚀 Overview

This repository hosts my personal engineering portfolio. It highlights deep technical decision-making, performance benchmarks, and architectural designs across multi-tenant SaaS platforms, financial engines, security WAFs, and Linux system tools.

### Key Engineering Highlights
- **Clean & Hexagonal Architecture**: Strict separation of domain logic, application use cases, and infrastructure adapters.
- **Advanced Database Patterns**: Multi-tenancy via PostgreSQL Row-Level Security (RLS), schema-per-tenant, hierarchical data structures using `LTREE`, and `GiST` indexing.
- **Client-Side Privacy & Security**: Zero-Trust PDF and cryptographic processing engines utilizing WASM and browser Canvas APIs.
- **High-Performance Web Frontend**: Zero-JS baseline static site generation powered by Astro, optimized for Core Web Vitals (LCP, INP, CLS).

---

## 🛠️ Featured Case Studies

- **AequiVault**: API-first double-entry financial engine built with Java 21, Spring Boot, PostgreSQL `LTREE`, and Angular Signals.
- **Clinicalyx**: HIPAA-compliant HealthTech SaaS in Go and Next.js, featuring field-level AES-256-GCM encryption and Blind Indexing (`HMAC-SHA256`).
- **Kartenant ERP**: Database-per-tenant SaaS ERP in Laravel 11 and PostgreSQL with automated landlord orchestration.
- **TramiFlow CE**: AGPL-3.0 open-source SaaS CRM and PDF workflow engine with zero-trust client-side WASM processing.
- **SpectrusGuard Enterprise & WooSpeed Analytics**: Low-overhead WAF and asynchronous analytical projection engine for high-traffic environments.

---

## 💻 Tech Stack

- **Framework**: [Astro 4.x](https://astro.build/)
- **Styling**: [TailwindCSS 3.x](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons & UI**: Custom SVG & Glassmorphism Design System

---

## 🚦 Local Development

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone git@github.com:carlosindriago/carlosindriago.github.io.git
   cd carlosindriago.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The static production output will be generated inside the `dist/` directory.

---

## 📫 Contact & Connect

- **GitHub**: [@carlosindriago](https://github.com/carlosindriago)
- **LinkedIn**: [carlosindriago](https://linkedin.com/in/carlosindriago)
- **Website**: [carlosindriago.github.io](https://carlosindriago.github.io)
