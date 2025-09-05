"use client"

import { useEffect, useState } from "react"
import { getRealtimeBus } from "@/lib/realtime"

export function RealtimeIndicator() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const bus = getRealtimeBus()
    const off = bus.on(() => setCount((c) => c + 1))
    return () => off()
  }, [])
  return (
    <div aria-live="polite" className="text-xs text-foreground/70">
      Live updates: <span className="rounded bg-secondary px-1.5 py-0.5">{count}</span>
    </div>
  )
}
