'use server'

import { getSupabaseServer } from "@/lib/supabase/server"

export async function signOut() {
  const supabase = getSupabaseServer()
  await supabase.auth.signOut()
}
