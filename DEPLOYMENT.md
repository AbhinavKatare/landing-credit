# 🚀 Deployment Guide

## Vercel (Recommended - Easiest)

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CreditHub Landing Page"
   git remote add origin https://github.com/yourusername/credithub-landing.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Done! 🎉

### Vercel Configuration

No additional configuration needed. Vercel automatically:
- Detects Next.js
- Runs `npm run build`
- Deploys to production
- Provides HTTPS
- Sets up CDN

## Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## AWS Amplify

### Steps:

1. **Push to GitHub**

2. **Deploy on AWS Amplify**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect GitHub repository
   - Build settings auto-detected
   - Click "Save and deploy"

## Docker Deployment

### Create Dockerfile:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and Run:

```bash
docker build -t credithub-landing .
docker run -p 3000:3000 credithub-landing
```

## Manual Deployment

### Build:

```bash
npm run build
```

### Start:

```bash
npm start
```

### Or use PM2:

```bash
npm install -g pm2
pm2 start npm --name "credithub-landing" -- start
pm2 save
pm2 startup
```

## Environment Variables

If you need environment variables:

1. Create `.env.local` file
2. Add variables (see `.env.example`)
3. For production, add in hosting platform's dashboard

## Custom Domain

### Vercel:
- Go to Project Settings → Domains
- Add your domain
- Follow DNS instructions

### Netlify:
- Go to Site Settings → Domain Management
- Add custom domain
- Update DNS records

## Performance Optimization

The landing page is already optimized with:
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Font optimization
- ✅ Lazy loading

## Monitoring

Consider adding:
- **Vercel Analytics**: Built-in
- **Google Analytics**: Add tracking code
- **Sentry**: Error monitoring

## SSL/HTTPS

All major platforms provide SSL automatically:
- Vercel: ✅ Automatic
- Netlify: ✅ Automatic
- AWS Amplify: ✅ Automatic

## Support

For issues or questions:
- Check `SETUP.md` for setup help
- Review Next.js documentation
- Check Tailwind CSS documentation
