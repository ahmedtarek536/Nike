# 🚀 Deploy to Vercel - Complete Guide

## Prerequisites

- [x] GitHub account
- [x] Vercel account (free) - https://vercel.com
- [x] Project built successfully locally

## 📋 Deployment Steps

### Option 1: Deploy via GitHub (Recommended)

#### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for Vercel deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

#### 2. Import to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

5. Click "Deploy"

#### 3. Add Environment Variables

1. Go to your project in Vercel
2. Click "Settings" → "Environment Variables"
3. Add all variables from `VERCEL_ENV_VARS.md`
4. Redeploy after adding variables

### Option 2: Deploy via Vercel CLI

#### 1. Install Vercel CLI

```bash
npm install -g vercel
```

#### 2. Login to Vercel

```bash
vercel login
```

#### 3. Deploy

```bash
# From your project directory
vercel

# For production deployment
vercel --prod
```

#### 4. Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? `ecommerce-client`
- In which directory is your code located? `./`
- Want to override settings? **N**

## 🔧 Post-Deployment Configuration

### 1. Set Environment Variables

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add all variables from `VERCEL_ENV_VARS.md`

### 2. Update NEXTAUTH_URL

After first deployment, update:
```
NEXTAUTH_URL=https://your-project-name.vercel.app
```

### 3. Configure OAuth Redirect URLs

#### Google OAuth Console:
- Authorized redirect URIs: `https://your-project-name.vercel.app/api/auth/callback/google`

#### Facebook App Settings:
- Valid OAuth Redirect URIs: `https://your-project-name.vercel.app/api/auth/callback/facebook`

### 4. Update API CORS Settings

Make sure your backend API allows requests from:
```
https://your-project-name.vercel.app
```

## 🎯 Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update environment variables with new domain

## 🔄 Automatic Deployments

Every push to `main` branch will automatically deploy to production.

### Preview Deployments

- Every pull request gets a unique preview URL
- Test changes before merging to main

## 📊 Monitoring

### View Logs
- Go to Deployments → Select deployment → View Function Logs

### Analytics
- Enable Vercel Analytics in Project Settings
- Monitor performance and user behavior

## 🐛 Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Test build locally: `npm run build`

### API Routes Not Working

1. Verify environment variables
2. Check function logs
3. Ensure API endpoints are correct

### Images Not Loading

1. Check `next.config.ts` image configuration
2. Verify image URLs are accessible
3. Check Vercel function logs

## 📝 Important Notes

- **Free Tier Limits**: 
  - 100GB bandwidth/month
  - Unlimited deployments
  - Serverless function execution time: 10s

- **Environment Variables**: 
  - Changes require redeployment
  - Use Vercel dashboard to update

- **Build Time**: 
  - First build: 2-5 minutes
  - Subsequent builds: 1-3 minutes (with cache)

## 🎉 Success!

Your app is now live at: `https://your-project-name.vercel.app`

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables](https://vercel.com/docs/environment-variables)
