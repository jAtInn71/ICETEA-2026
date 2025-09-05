"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { getSupabaseBrowser } from "@/lib/supabase/browser"
import { useRouter } from "next/navigation"

export function SubmissionForm() {
  const [title, setTitle] = useState("")
  const [abstract, setAbstract] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()

  async function uploadToBlob(file: File): Promise<string> {
    // Upload via signed upload route
    const formData = new FormData()
    formData.append("file", file)
    const res = await fetch("/api/upload", { method: "POST", body: formData })
    if (!res.ok) throw new Error("Upload failed")
    const data = await res.json()
    return data.url as string
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const supabase = getSupabaseBrowser()
      const { data: auth } = await supabase.auth.getUser()
      if (!auth.user) {
        alert("Please sign in to submit.")
        router.push("/auth/login")
        return
      }

      let fileUrl: string | null = null
      if (file) {
        fileUrl = await uploadToBlob(file)
      }

      const { error } = await supabase.from("submissions").insert({
        user_id: auth.user.id,
        title,
        abstract,
        file_url: fileUrl,
        status: "submitted",
      })
      if (error) throw error

      setTitle("")
      setAbstract("")
      setFile(null)
      alert("Submission received! You’ll be notified after review.")
      router.push("/")
    } catch (err: any) {
      console.error(err)
      alert(err.message ?? "Submission failed")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Title</label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm mb-1">Abstract</label>
        <Textarea value={abstract} onChange={(e) => setAbstract(e.target.value)} required rows={6} />
      </div>
      <div>
        <label className="block text-sm mb-1">PDF (optional)</label>
        <Input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      </div>
      <Button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Paper"}
      </Button>
    </form>
  )
}
