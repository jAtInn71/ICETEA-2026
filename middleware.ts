import { NextResponse, type NextRequest } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next({ request: { headers: req.headers } })
  
  try {
    // Get Supabase environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    // If Supabase environment variables are not set, just return the response
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase environment variables not set. Skipping authentication check.')
      return res
    }
    
    // Refresh session on every request
    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          get: (name: string) => req.cookies.get(name)?.value,
          set: (name: string, value: string, options: any) => {
            res.cookies.set({ name, value, ...options })
          },
          remove: (name: string, options: any) => {
            res.cookies.set({ name, value: "", ...options })
          },
        },
      },
    )
    
    await supabase.auth.getUser()
  } catch (error) {
    console.error('Error in middleware:', error)
    // Continue with the request even if there's an error with Supabase
  }
  
  return res
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
