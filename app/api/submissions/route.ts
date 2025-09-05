import { NextResponse } from "next/server"
import { hasSupabase } from "@/lib/env"
// import { getServerSupabase } from "@/lib/supabase/server"

export async function GET() {
  if (!hasSupabase) {
    return NextResponse.json({ message: "Supabase not configured. Using local client storage." }, { status: 501 })
  }
  return NextResponse.json({ message: "Supabase path placeholder" })
}
