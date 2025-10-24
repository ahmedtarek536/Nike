# Environment Variables for Vercel

Add these environment variables in your Vercel project settings:

## Required Variables

### API Configuration
```
NEXT_PUBLIC_API_URL=http://ecommerce232.runasp.net
```

### NextAuth Configuration
```
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
NEXTAUTH_SECRET=your-random-secret-key-here
```

### Google OAuth (if using)
```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```

### Facebook OAuth (if using)
```
NEXT_PUBLIC_FACEBOOK_APP_ID=your-facebook-app-id
```

### Firebase Configuration
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCtInGt87_ZY1Vi1B8VsNSXPO52Wae5mN4
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=airbnb-image-e85da.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=airbnb-image-e85da
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=airbnb-image-e85da.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=339493479186
NEXT_PUBLIC_FIREBASE_APP_ID=1:339493479186:web:357a82096aa564693789cb
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-K9P7YWDFM6
```

## How to Add in Vercel

1. Go to your project in Vercel Dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the sidebar
4. Add each variable above
5. Select which environments (Production, Preview, Development)
6. Click "Save"

## Generate NEXTAUTH_SECRET

Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

Or use this online: https://generate-secret.vercel.app/32
