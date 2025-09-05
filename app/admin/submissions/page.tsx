"use client"

import { useEffect, useState } from "react"
import { getSupabaseBrowser } from "@/lib/supabase/browser"
import { Button } from "@/components/ui/button"

type Submission = {
  id: string
  user_id: string
  title: string
  abstract: string
  file_url: string | null
  status: "submitted" | "accepted" | "rejected"
  created_at: string
}

export default function AdminSubmissions() {
  const supabase = getSupabaseBrowser()
  const [subs, setSubs] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    async function load() {
      const { data, error } = await supabase.from("submissions").select("*").order("created_at", { ascending: false })
      if (!active) return
      if (error) {
        console.error(error)
      } else {
        setSubs((data as Submission[]) || [])
      }
      setLoading(false)
    }
    load()

    const channel = supabase
      .channel("submissions-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "submissions" }, (payload) => {
        setSubs((prev) => {
          const newRow = payload.new as Submission
          const oldRow = payload.old as Submission
          if (payload.eventType === "INSERT") {
            return [newRow, ...prev]
          } else if (payload.eventType === "UPDATE") {
            return prev.map((r) => (r.id === newRow.id ? newRow : r))
          } else if (payload.eventType === "DELETE") {
            return prev.filter((r) => r.id !== oldRow.id)
          }
          return prev
        })
      })
      .subscribe()

    return () => {
      active = false
      supabase.removeChannel(channel)
    }
  }, [supabase])

  async function updateStatus(id: string, status: Submission["status"]) {
    const { error } = await supabase.from("submissions").update({ status }).eq("id", id)
    if (error) alert(error.message)
  }

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Submissions</h1>
      <div className="space-y-4">
        {subs.map((s) => (
          <div key={s.id} className="rounded-lg border p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h3 className="font-medium">{s.title}</h3>
                <p className="text-sm text-foreground/80 max-w-3xl">{s.abstract}</p>
                {s.file_url && (
                  <a href={s.file_url} target="_blank" rel="noreferrer" className="text-sm underline">
                    View PDF
                  </a>
                )}
                <p className="text-xs text-foreground/60 mt-1">Status: {s.status}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => updateStatus(s.id, "accepted")}>
                  Accept
                </Button>
                <Button variant="outline" onClick={() => updateStatus(s.id, "rejected")}>
                  Reject
                </Button>
                <Button onClick={() => updateStatus(s.id, "submitted")}>Reset</Button>
              </div>
            </div>
          </div>
        ))}
        {subs.length === 0 && <p className="text-sm text-foreground/70">No submissions yet.</p>}
      </div>
    </div>
  )
}
