// Helper to get the correct API URL based on environment

export function getApiUrl(endpoint: 'products' | 'bags' | 'wishlist' = 'products'): string {
  // Check if we're in the browser (client-side)
  if (typeof window !== 'undefined') {
    // In production (Vercel), use the proxy to avoid mixed content errors
    if (process.env.NODE_ENV === 'production') {
      // Use the current domain with appropriate proxy
      return `${window.location.origin}/api/${endpoint}`;
    }
  }
  
  // Server-side or development: use direct backend URL
  const endpointMap = {
    products: 'products',
    bags: 'Bags',
    wishlist: 'Wishlist'
  };
  
  return `http://ecommerce232.runasp.net/api/${endpointMap[endpoint]}`;
}

export function getFullApiUrl(): string {
  // For non-proxied endpoints, use the base URL
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    return window.location.origin;
  }
  return 'http://ecommerce232.runasp.net';
}
