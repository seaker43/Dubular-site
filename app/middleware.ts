
import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/', '/rank', '/search', '/favorites', '/u/:handle', '/streams',
    '/api/health', '/api/ping', '/api/creators', '/api/search'
  ],
});

export const config = {
  matcher: [
    '/account(.*)',
    '/settings(.*)',
    '/u/me',
    '/api/secure(.*)',
    '/api/settings(.*)',
    '/api/profile',
  ],
};
