import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { SubmissionForm } from "@/components/submission-form"
import Link from "next/link"

export default function SubmissionPage() {
  return (
    <main>
      <SiteNavbar />
      <section className="mx-auto max-w-3xl px-4 py-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900">Paper Submission</h1>
        <p className="leading-relaxed text-blue-800 text-center">
          Please use the form below to submit your research paper. Ensure you have read and followed all the submission guidelines outlined in the <Link href="/call-for-papers" className="text-green-700 hover:underline">Call for Papers</Link>.
        </p>
        <div className="rounded-xl p-6 bg-white shadow-lg border border-green-200 animate-fade-in animate-slide-up" style={{ boxShadow: '0 0 24px 4px #38b2ac33, 0 0 8px 2px #2563eb22', transition: 'box-shadow 0.5s' }}>
          <SubmissionForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
