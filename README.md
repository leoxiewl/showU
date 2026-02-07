This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

**Steps:**

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [Vercel](https://vercel.com/new) and sign in
3. Import your repository: `leoxiewl/showU`
4. Configure environment variables (optional, see below)
5. Click "Deploy"

### Environment Variables

This project uses environment variables for configuration. See [.env.example](.env.example) for a template:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values:

- `NEXT_PUBLIC_APP_NAME` - Application name (default: ShowU)
- `NEXT_PUBLIC_APP_URL` - Your application URL

### Deployment Configuration

- **Framework**: Next.js 16.1.6 (App Router)
- **Node Version**: 20.x (automatically detected)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (automatic)
- **Deploy Regions**: Tokyo (hnd1) & Seoul (icn1) for optimized Asia/China performance

### Technology Stack

- **Framework**: Next.js 16.1.6 with App Router
- **React**: 19.2.3 with React Compiler
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Analytics**: Vercel Analytics

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
