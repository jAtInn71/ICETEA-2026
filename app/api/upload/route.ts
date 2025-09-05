import { NextResponse } from "next/server"
import { put } from "@vercel/blob"

export const runtime = "nodejs"

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get("file") as File | null
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 })

  const arrayBuffer = await file.arrayBuffer()
  const blob = await put(`papers/${Date.now()}-${file.name}`, new Uint8Array(arrayBuffer), {
    access: "public",
    contentType: file.type || "application/pdf",
  })
  return NextResponse.json({ url: blob.url })
}
