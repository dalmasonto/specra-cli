// Next.js requires dynamic to be statically analyzable, so we can't re-export it
export const dynamic = 'error'
export const runtime = 'nodejs'

// Re-export the GET handler from SDK
export { GET } from "specra/app/api/mdx-watch"
