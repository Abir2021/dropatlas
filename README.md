# DropAtlas — Airdrop Guides

Clean, regularly updated airdrop strategy guides. No trackers. Just actionable content.

**Live site:** (will be on Vercel after deploy)

## ✨ Features

- Beautiful dark UI with smooth scroll animations
- Fully responsive (mobile + desktop)
- Markdown-powered guide content
- Easy to update — just edit one file

## 🚀 How to update guides (super easy)

All guides live in a single file:

```
data/guides.ts
```

### To add a new guide:

1. Copy an existing guide object
2. Change the `slug`, `title`, `description`, etc.
3. Write the content in the `content` field (Markdown supported)
4. Commit & push — Vercel auto-deploys

### To edit an existing guide:

Just open `data/guides.ts`, find the guide, update the text and the `updatedAt` date.

That's it. No CMS, no database, no complicated setup.

## Local development

```bash
npm install
npm run dev
```

## Tech

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- React Markdown

---

Built for the community by [@DabidWm](https://x.com/DabidWm)
