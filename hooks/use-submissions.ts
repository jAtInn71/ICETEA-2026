"use client"

import useSWR from "swr"
import { getRealtimeBus } from "@/lib/realtime"

export type Submission = {
  id: string
  title: string
  authors: string
  email: string
  track: string
  fileName?: string
  fileSize?: number
  status: "pending" | "accepted" | "rejected"
  createdAt: string
}

const KEY = "submissions"

const fetcher = async (): Promise<Submission[]> => {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Submission[]) : []
  } catch {
    return []
  }
}

const write = (rows: Submission[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(rows))
  } catch {}
}

export function useSubmissions() {
  const { data, mutate, isLoading } = useSWR<Submission[]>(KEY, fetcher, { revalidateOnFocus: false })
  const rows = data || []

  // subscribe to realtime
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (typeof window !== "undefined") {
    // ensure bus is initialized in browser
    getRealtimeBus()
  }

  // simple helpers
  const add = async (payload: Omit<Submission, "id" | "status" | "createdAt">) => {
    const next: Submission = {
      id: crypto.randomUUID(),
      status: "pending",
      createdAt: new Date().toISOString(),
      ...payload,
    }
    const updated = [next, ...rows]
    write(updated)
    getRealtimeBus().broadcast({ type: "submission:created", id: next.id })
    await mutate(updated, { revalidate: false })
    return next
  }

  const setStatus = async (id: string, status: Submission["status"]) => {
    const updated = rows.map((r) => (r.id === id ? { ...r, status } : r))
    write(updated)
    getRealtimeBus().broadcast({ type: "submission:updated", id, status })
    await mutate(updated, { revalidate: false })
  }

  return { rows, isLoading, add, setStatus }
}
