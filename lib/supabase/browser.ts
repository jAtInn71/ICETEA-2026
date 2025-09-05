"use client"

import { createBrowserClient } from "@supabase/ssr"

let _browserSupabase: ReturnType<typeof createBrowserClient> | null = null

export function getSupabaseBrowser() {
  if (_browserSupabase) return _browserSupabase

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If env vars are missing, return a minimal mock to avoid runtime errors until integration is added.
  if (!url || !anon) {
    const mock = {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        signOut: async () => ({ error: null }),
      },
      // Optional APIs used elsewhere; they safely no-op if Supabase isn't configured
      from: () => ({
        insert: async () => ({ data: null, error: new Error("Supabase not configured") }),
        select: async () => ({ data: null, error: new Error("Supabase not configured") }),
        update: async () => ({ data: null, error: new Error("Supabase not configured") }),
        eq: () => ({ data: null, error: new Error("Supabase not configured") }),
        single: async () => ({ data: null, error: new Error("Supabase not configured") }),
      }),
      channel: () => ({
        on: () => ({
          subscribe: () => ({ unsubscribe: () => {} }),
        }),
      }),
    } as any
    _browserSupabase = mock
    return _browserSupabase
  }

  _browserSupabase = createBrowserClient(url, anon)
  return _browserSupabase
}

// Named alias to satisfy imports expecting `getBrowserSupabase`
export { getSupabaseBrowser as getBrowserSupabase }
