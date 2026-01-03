import { createSecurityProxy } from "specra/middleware/security"

// Note: Redirects from frontmatter are handled at build time via next.config.js
// This proxy handles runtime security headers, path validation, and dynamic logic

export const proxy = createSecurityProxy({
  production: process.env.NODE_ENV === "production",
  strictPathValidation: true,
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
