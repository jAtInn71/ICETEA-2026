import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { getSupabaseServer } from "@/lib/supabase/server"
import Link from "next/link"
import { redirect } from "next/navigation"

async function requireAdmin() {
  const supabase = getSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/auth/login")
  // Check profile role
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()
  if (profile?.role !== "admin") redirect("/")
}

export default async function AdminHome() {
  await requireAdmin()
  return (
    <main>
      <SiteNavbar />
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Admin Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/admin/submissions" className="rounded-lg border p-6 hover:bg-muted transition">
            <h3 className="font-medium mb-2">Submissions</h3>
            <p className="text-sm text-foreground/80">Review, accept, or reject papers in realtime.</p>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
