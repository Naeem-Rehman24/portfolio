# Deployment Guide

This guide covers multiple deployment options for your Next.js portfolio website.

## Prerequisites

Before deploying, make sure you have:
- ✅ All dependencies installed (`npm install`)
- ✅ The project builds successfully (`npm run build`)
- ✅ A Git repository (GitHub, GitLab, or Bitbucket)

---

## Option 1: Vercel (Recommended for Next.js)

Vercel is the creators of Next.js and offers the best integration and performance.

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import Your Project**
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js settings

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `your-project-name.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Advantages:
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on Git push
- ✅ Preview deployments for pull requests
- ✅ Free tier available

---

## Option 2: Netlify

Netlify is another excellent option for Next.js applications.

### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Import Your Project**
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Base directory**: `./` (if your project is in a subdirectory)

4. **Add Netlify Configuration (Optional)**
   Create a `netlify.toml` file in the root:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

5. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `your-project-name.netlify.app`

### Advantages:
- ✅ Easy Git integration
- ✅ Automatic HTTPS
- ✅ Free tier available
- ✅ Form handling and serverless functions

---

## Option 3: Static Export (GitHub Pages, etc.)

If you want to deploy as a static site (no server-side features), you can export your Next.js app.

### Steps:

1. **Update `next.config.js`**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
     output: 'export', // Enable static export
     images: {
       unoptimized: true, // Required for static export
       domains: [],
       formats: ['image/avif', 'image/webp'],
     },
   }
   
   module.exports = nextConfig
   ```

2. **Build and Export**
   ```bash
   npm run build
   ```
   This creates an `out` folder with static files.

3. **Deploy to GitHub Pages**
   - Push your code to GitHub
   - Go to repository Settings → Pages
   - Select source: "GitHub Actions" or "Deploy from a branch"
   - Select branch: `main` or `gh-pages`
   - Select folder: `/out` (if using branch deployment)
   - Your site will be at `username.github.io/repository-name`

4. **Deploy to Other Static Hosts**
   - Upload the contents of the `out` folder to your hosting provider
   - Examples: GitHub Pages, Cloudflare Pages, AWS S3, etc.

### Note:
- ⚠️ Static export disables some Next.js features (API routes, server-side rendering, etc.)
- ⚠️ Only use if your portfolio doesn't need server-side features

---

## Option 4: Traditional Hosting (VPS, Shared Hosting)

For traditional hosting providers, you'll need to build and run the production server.

### Steps:

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Install Production Dependencies Only**
   ```bash
   npm ci --production
   ```

3. **Start the Production Server**
   ```bash
   npm start
   ```

4. **Use Process Manager (Recommended)**
   For better reliability, use PM2:
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Reverse Proxy (Nginx)**
   Example Nginx configuration:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Set Up SSL (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Environment Variables

If you need environment variables:

1. **Vercel/Netlify**: Add them in the project settings dashboard
2. **Static Export**: Create a `.env.local` file (but note: client-side only)
3. **Traditional Hosting**: Create a `.env.production` file or set system environment variables

---

## Pre-Deployment Checklist

- [ ] Test the build locally: `npm run build && npm start`
- [ ] Check all links and images work
- [ ] Verify responsive design on mobile devices
- [ ] Test all interactive features
- [ ] Update any hardcoded URLs to production URLs
- [ ] Check console for errors
- [ ] Optimize images if needed
- [ ] Review and update SEO meta tags
- [ ] Test contact form (if applicable)

---

## Post-Deployment

1. **Test Your Live Site**
   - Check all pages load correctly
   - Test on different devices and browsers
   - Verify all links work

2. **Set Up Analytics (Optional)**
   - Google Analytics
   - Vercel Analytics (if using Vercel)
   - Plausible Analytics

3. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Check Lighthouse scores
   - Monitor Core Web Vitals

---

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear `.next` folder and `node_modules`, then reinstall
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Verify image paths are correct
- Check `next.config.js` image configuration
- For static export, ensure `unoptimized: true` is set

### 404 Errors
- Verify all routes are correct
- Check if using static export, ensure all pages are statically generated

### Performance Issues
- Optimize images
- Check bundle size
- Enable compression on your hosting provider

---

## Quick Deploy Commands

### Vercel CLI
```bash
npm i -g vercel
vercel
```

### Netlify CLI
```bash
npm i -g netlify-cli
netlify deploy --prod
```

---

## Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
