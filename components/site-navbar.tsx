"use client"

import { signOut } from "@/app/auth/actions"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { getSupabaseBrowser } from "@/lib/supabase/browser"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/call-for-papers", label: "Submit the Papers" },
  //{ href: "/submission", label: "Submission" },
  { href: "/registration", label: "Registration" },
  { href: "/committees", label: "Committees" },
  //{ href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "/acknowledgment", label: "Acknowledgment" }, // Add this new line
  //{ href: "/contact", label: "Contact" },
]

export function SiteNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const supabase = getSupabaseBrowser()
    supabase.auth.getUser().then(({ data }) => setUserEmail(data.user?.email ?? null))
  }, [])

  // Highlight active link
  const isActive = (href: string) => (pathname === href ? "text-primary font-medium" : "text-foreground/80")

  return (
    // Use fixed for always visible, or sticky for scroll with content
    <header className="w-full sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-8 py-3 bg-gradient-to-r from-[#2563EB] via-[#0072BC] to-[#39B54A] shadow-lg">
        <div className="flex items-center gap-2">
          {/* Logo Image */}
          <Link href="/">
            <span className="inline-block align-middle mr-2">
              <img 
                src="https://setumadhavani-ldnja.wordpress.com/wp-content/uploads/2025/09/gemini_generated_image_3rjetk3rjetk3rje-removebg-preview.png" 
                alt="ICETEA Conference" 
                className="h-10 w-auto object-contain"
              />
            </span>
          </Link>
          <span className="text-white font-bold text-lg tracking-wide">ICETEA 2026</span>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex flex-row items-center gap-4 whitespace-nowrap">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-white px-3 py-1 rounded hover:bg-[#39B54A] hover:text-white transition-colors duration-200 ${isActive(l.href)}`}> 
              {l.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu button */}
        <button aria-label="Open Menu" onClick={() => setOpen((v) => !v)} className="md:hidden p-2">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </nav>
      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden border-t bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 w-full">
          <div className="px-8 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`text-white px-3 py-1 rounded hover:bg-[#39B54A] hover:text-white transition-colors duration-200 ${isActive(l.href)}`}> 
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
