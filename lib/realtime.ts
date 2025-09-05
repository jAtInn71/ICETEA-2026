import { hasSupabase } from "@/lib/env"
import { getBrowserSupabase } from "@/lib/supabase/browser"

type RealtimeEvent =
  | { type: "submission:created"; id: string }
  | { type: "submission:updated"; id: string; status: "pending" | "accepted" | "rejected" }

type Listener = (e: RealtimeEvent) => void

class RealtimeBus {
  private channel: BroadcastChannel | null = null
  private listeners = new Set<Listener>()
  private inited = false

  init() {
    if (this.inited) return
    this.inited = true
    if (typeof window !== "undefined") {
      this.channel = new BroadcastChannel("submissions")
      this.channel.onmessage = (e) => this.emit(e.data as RealtimeEvent)
    }
    // Optional Supabase realtime
    if (hasSupabase) {
      const supa = getBrowserSupabase()
      try {
        supa
          ?.channel("public:submissions")
          .on("postgres_changes", { event: "*", schema: "public", table: "submissions" }, (payload: any) => {
            if (payload.eventType === "INSERT") {
              this.broadcast({ type: "submission:created", id: payload.new.id })
            } else if (payload.eventType === "UPDATE") {
              this.broadcast({ type: "submission:updated", id: payload.new.id, status: payload.new.status })
            }
          })
          .subscribe()
      } catch {
        // ignore if not configured
      }
    }
  }

  on(listener: Listener) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  emit(e: RealtimeEvent) {
    this.listeners.forEach((l) => l(e))
  }

  broadcast(e: RealtimeEvent) {
    this.emit(e)
    this.channel?.postMessage(e)
  }
}

let singleton: RealtimeBus | null = null
export function getRealtimeBus() {
  if (!singleton) {
    singleton = new RealtimeBus()
    singleton.init()
  }
  return singleton
}
