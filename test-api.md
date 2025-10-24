# API Testing Guide

## Prerequisites
1. Backend server running on `https://localhost:44352`
2. Valid authentication token (get from login)
3. Browser DevTools open (Network tab)

## Manual Testing Checklist

### 1. Authentication APIs
- [ ] **Login** - POST `/api/Customers/auth-login`
  - Test with valid credentials
  - Test with invalid credentials
  - Verify token is returned
  
- [ ] **Signup** - POST `/api/Customers/auth-signup`
  - Test with new user
  - Test with existing email
  - Verify validation errors
  
- [ ] **Logout** - POST `/api/Customers/auth-logout`
  - Verify token is cleared

### 2. Products APIs
- [ ] **Search Products** - GET `/api/Products/SearchProducts`
  - Test without filters
  - Test with search query
  - Test with collection filter
  - Test with category/subcategory filters
  - Test with price range
  - Verify pagination works
  
- [ ] **Get Product by ID** - GET `/api/products/{id}`
  - Test with valid product ID
  - Test with invalid product ID
  - Verify caching (check Network tab - should see cached response)
  
- [ ] **Product Recommendations** - GET `/api/products/{id}/recommendations`
  - Verify related products are returned
  
- [ ] **Product Suggestions** - GET `/api/Products/Suggestion/{query}`
  - Test autocomplete functionality
  - Verify Trie-based search works
  
- [ ] **Add Review** - POST `/api/ProductReviews`
  - Test with valid rating (1-5)
  - Test with invalid rating
  - Verify authentication required

### 3. Shopping Bag APIs
- [ ] **Get Bag** - GET `/api/Bags/Customer`
  - Verify user's bag items are returned
  - Test without authentication
  
- [ ] **Add to Bag** - POST `/api/Bags`
  - Test adding valid product
  - Test adding out-of-stock product
  - Test adding duplicate items
  
- [ ] **Update Bag Item** - PUT `/api/Bags/{id}`
  - Test increasing quantity
  - Test decreasing quantity
  - Test exceeding available stock
  
- [ ] **Remove from Bag** - DELETE `/api/Bags/{id}`
  - Verify item is removed

### 4. Wishlist APIs
- [ ] **Get Wishlist** - GET `/api/Wishlist/Customer`
  - Verify user's wishlist items
  
- [ ] **Add to Wishlist** - POST `/api/Wishlist`
  - Test adding product variant
  - Test adding duplicate
  
- [ ] **Remove from Wishlist** - DELETE `/api/Wishlist/{productVariantId}`
  - Verify item is removed

### 5. Collections APIs
- [ ] **Get All Collections** - GET `/api/Collections`
  - Verify collections are returned
  - Check response time

## Performance Testing

### Check for Issues:
1. **Duplicate Requests**
   - Open Network tab
   - Navigate through pages
   - Look for duplicate API calls to same endpoint
   - ✅ Should see deduplication working

2. **Request Timeouts**
   - Throttle network (DevTools > Network > Throttling)
   - Verify timeout handling (10 seconds)
   - Check retry logic (should retry twice)

3. **Caching**
   - Visit product details page
   - Navigate away and back
   - Check Network tab - should see cached response (no new request)

4. **Error Handling**
   - Stop backend server
   - Try any API call
   - Verify user-friendly error message
   - Check console for proper error logging

## Browser Testing

### Test in DevTools Console:
```javascript
// Test API client directly
import { apiClient } from './src/utils/apiClient';

// Test GET request
apiClient.get('/api/Collections')
  .then(data => console.log('Success:', data))
  .catch(err => console.error('Error:', err));

// Test with authentication
const token = 'your-jwt-token-here';
apiClient.get('/api/Bags/Customer', token)
  .then(data => console.log('Bag:', data))
  .catch(err => console.error('Error:', err));
```

## Expected Response Format

All APIs should return:
```json
{
  "success": true,
  "data": [...],
  "message": "Optional message"
}
```

On error:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Technical details"
}
```

## Common Issues

### Issue: CORS Error
**Symptom:** `Access-Control-Allow-Origin` error in console
**Solution:** 
- Check backend CORS configuration
- Verify `AllowLocalhostPolicy` includes `http://localhost:3000`

### Issue: 401 Unauthorized
**Symptom:** API returns 401 status
**Solution:**
- Check if token is valid
- Verify token is being sent in Authorization header
- Check token expiration

### Issue: Network Timeout
**Symptom:** Request takes >10 seconds
**Solution:**
- Check backend server performance
- Verify database queries are optimized
- Check network connection

### Issue: Slow Page Load
**Symptom:** Pages take long to load
**Solution:**
- Check Network tab for slow API calls
- Verify caching is working
- Check for unnecessary re-renders (React DevTools Profiler)

## Performance Benchmarks

### Target Response Times:
- **Authentication**: < 500ms
- **Product List**: < 1000ms
- **Product Details**: < 500ms (first load), < 50ms (cached)
- **Add to Bag**: < 300ms
- **Search/Filter**: < 800ms

### Monitor:
- Total request time
- Time to First Byte (TTFB)
- Download time
- Number of requests per page

## Automated Testing (Future)

Consider implementing:
1. Jest unit tests for API functions
2. Cypress E2E tests for user flows
3. Performance testing with Lighthouse CI
4. Load testing with k6 or Artillery

## Reporting Issues

When reporting API issues, include:
1. Endpoint URL
2. Request method and body
3. Response status and body
4. Browser console errors
5. Network tab screenshot
6. Steps to reproduce
