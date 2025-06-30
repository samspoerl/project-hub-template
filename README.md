# Project Hub

A modern project dashboard built with [Next.js](https://nextjs.org) to help you track, organize, and/or showcase your projects. Use as a standalone app or as a page or component in another Next.js project. Easily run locally, with Docker, or deploy to Vercel.

## 🚀 Features

- Project status tracking and visibility indicators, optionally stored in Vercel Edge Config for easy updates.
- Secure authentication using GitHub OAuth (easily removable).
- Convenient links to deployed sites, GitHub repos, and Vercel projects.
- Responsive, clean UI with dark mode.

## 🛠️ Quickstart

### 1. Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Docker

```bash
docker compose up
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Vercel

Publish your repo to GitHub or some other git hosting platform. Then [import your project to Vercel](https://vercel.com/docs/getting-started-with-vercel/import) and follow the deployment instructions.

## ⚙️ Additional Options

This app works out of the box with no configuration required. However, you can optionally enable extra features for enhanced functionality and security:

### Authentication

- Authentication is **disabled by default**. To enable it, set the `USE_AUTH` environment variable to `true` in your `.env.local` file, and provide an `AUTH_SECRET` as well as at least one OAuth client ID and secret.
- By default, the app is set up for GitHub OAuth. Add an auth secret (run `npx auth secret` using the [Auth.js CLI](https://cli.authjs.dev/)), set up a [GitHub OAuth client](https://authjs.dev/guides/configuring-github), and set the relevant environment variables in `.env.local` (copy from `.env.local.example`).
- You may use other OAuth providers supported by [Auth.js](https://authjs.dev/getting-started/authentication/oauth) as well. To do so, add the provider(s) to `auth.ts` and `LoginForm.tsx` accordingly.

### Dynamic Project List with Edge Config

- For a dynamic project list that can be updated without code changes, use [Vercel Edge Config](https://vercel.com/docs/edge-config/get-started). Set `USE_EDGE_CONFIG=true` and provide your `EDGE_CONFIG` connection string in `.env.local`.
- If you prefer a static list, just update `src/lib/data.ts`.

### Vercel & GitHub Links

- To display links to this GitHub repository and Vercel Project, and to the projects in the UI, set the relevant environment variables in `.env.local`.

## Appendix

### 📁 Project Structure

```
project-hub/
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # Shared UI components
│   │   └── ui/        # shadcn UI components
│   ├── contexts/      # React contexts (e.g., theme)
│   ├── lib/           # Utilities, types, (optional) data, and (optional) auth
│   └── middleware.ts  # (Optional) Auth middleware
├── Dockerfile         # Production Docker image
├── compose.yaml       # Docker Compose setup
└── ...
```

The `components/ui` directory contains **[shadcn](https://ui.shadcn.com/)** components, providing accessible and customizable UI primitives for React.

## 🤝 Contributing

Contributions are welcome! Please open an issue to discuss major changes before submitting a pull request.

## 📝 License

Licensed under the [MIT License](/LICENSE.md).

## 📣 Author

Built and maintained by [Sam Spoerl](https://samspoerl.com). If you use this project, let me know—I'd love to see what you build!
