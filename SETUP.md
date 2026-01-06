# 🚀 Quick Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm 9+ or yarn/pnpm

## Installation Steps

### 1. Clone or Copy Files

If you're copying from the LandingPage folder:

```bash
# Create new Next.js project
npx create-next-app@latest credithub-landing --typescript --tailwind --app --no-src-dir

# Or copy files directly to your existing Next.js project
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Project Structure

After setup, your project should look like:

```
your-project/
├── app/
│   ├── page.tsx          # Copy from LandingPage/page.tsx
│   ├── layout.tsx        # Copy from LandingPage/layout.tsx
│   └── globals.css       # Copy from LandingPage/styles.css
├── package.json          # Copy from LandingPage/package.json
├── tsconfig.json         # Copy from LandingPage/tsconfig.json
├── next.config.ts        # Copy from LandingPage/next.config.ts
├── tailwind.config.ts    # Copy from LandingPage/tailwind.config.ts
├── postcss.config.mjs     # Copy from LandingPage/postcss.config.mjs
└── .gitignore            # Copy from LandingPage/.gitignore
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your landing page.

### 5. Build for Production

```bash
npm run build
npm start
```

## 📁 File Placement

If using Next.js App Router (recommended):

- `page.tsx` → `app/page.tsx`
- `layout.tsx` → `app/layout.tsx`
- `styles.css` → `app/globals.css` (merge or replace)

If using Pages Router:

- `page.tsx` → `pages/index.tsx`
- `layout.tsx` → `pages/_app.tsx` (wrap with layout)
- `styles.css` → `styles/globals.css`

## ✅ Verification Checklist

- [ ] All dependencies installed
- [ ] Tailwind CSS configured
- [ ] Page renders without errors
- [ ] All sections visible
- [ ] Responsive design works
- [ ] Animations working
- [ ] Links functional

## 🎨 Customization

1. **Brand Colors**: Update `#74bc1f` and `#5da612` in all files
2. **Content**: Edit text in `page.tsx`
3. **Logo**: Replace CreditCard icon with your logo
4. **Links**: Update hrefs in navigation and footer

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Connect repository
- **Docker**: Use `next build` output

## 📝 Notes

- All icons use `lucide-react` - no image files needed
- Fully responsive design
- SEO optimized with metadata
- Accessible with proper ARIA labels
