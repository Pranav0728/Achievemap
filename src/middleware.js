
export { default } from "next-auth/middleware"

export const config = { matcher: ['/checkout', '/roadmaps/:path*']}