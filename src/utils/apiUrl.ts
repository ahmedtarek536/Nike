// Helper to get the correct API URL based on environment

export function getApiUrl(): string {
  // Check if we're in the browser (client-side)
  if (typeof window !== 'undefined') {
    // In production (Vercel), use the proxy to avoid mixed content errors
    if (process.env.NODE_ENV === 'production') {
      // Use the current domain with /api/products proxy
      return `${window.location.origin}/api/products`;
    }
  }
  
  // Server-side or development: use direct backend URL
  return 'http://ecommerce232.runasp.net/api/products';
}

export function getFullApiUrl(): string {
  // For non-products endpoints, use the base URL
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    return window.location.origin;
  }
  return 'http://ecommerce232.runasp.net';
}
