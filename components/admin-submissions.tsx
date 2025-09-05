"use client"

import { useSubmissions } from "@/hooks/use-submissions"
import { Button } from "@/components/ui/button"
import { RealtimeIndicator } from "@/components/realtime-indicator"

export function AdminSubmissions() {
  const { rows, isLoading, setStatus } = useSubmissions()

  if (isLoading) return <p className="p-4">Loading…</p>
  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Submissions</h2>
        <RealtimeIndicator />
      </div>
      <div className="overflow-x-auto rounded-md border">
        <table className="min-w-full text-sm">
          <thead className="bg-secondary/50 text-foreground/80">
            <tr>
              <th className="px-3 py-2 text-left">Title</th>
              <th className="px-3 py-2 text-left">Authors</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Track</th>
              <th className="px-3 py-2 text-left">File</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="px-3 py-2">{s.title}</td>
                <td className="px-3 py-2">{s.authors}</td>
                <td className="px-3 py-2">{s.email}</td>
                <td className="px-3 py-2">{s.track}</td>
                <td className="px-3 py-2">{s.fileName ?? "-"}</td>
                <td className="px-3 py-2">
                  <span
                    className={
                      s.status === "pending"
                        ? "rounded bg-muted px-2 py-0.5"
                        : s.status === "accepted"
                          ? "rounded bg-green-100 px-2 py-0.5 text-green-700"
                          : "rounded bg-red-100 px-2 py-0.5 text-red-700"
                    }
                  >
                    {s.status}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setStatus(s.id, "accepted")}>
                      Accept
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setStatus(s.id, "rejected")}>
                      Reject
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={7} className="px-3 py-6 text-center text-foreground/70">
                  No submissions yet. New entries appear here in realtime.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
