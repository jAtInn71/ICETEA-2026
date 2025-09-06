import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Acknowledgment | ICETEA 2026",
  description: "Acknowledgments for ICETEA 2026 Conference",
}

export default function AcknowledgmentPage() {
  return (
    <main>
      <SiteNavbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">Acknowledgments</h1>
        
        {/* Microsoft CMT Acknowledgment */}
        <div className="space-y-4 rounded-xl p-6 bg-white shadow-lg border border-green-200 animate-fade-in animate-slide-up mb-8" 
             style={{ boxShadow: '0 0 24px 4px #38b2ac33, 0 0 8px 2px #2563eb22', transition: 'box-shadow 0.5s' }}>
          <h2 className="text-2xl font-semibold text-green-700">Microsoft CMT Service</h2>
          <p className="text-blue-900 text-sm" style={{ background: 'rgba(0,0,0,0.02)', padding: '8px', borderRadius: '6px' }}>
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
            This service was provided for free by Microsoft and they bore all expenses, including costs 
            for Azure cloud services as well as for software development and support.
          </p>
        </div>

        {/* General Acknowledgments */}
        <div className="space-y-4 rounded-xl p-6 bg-white shadow-lg border border-green-200 animate-fade-in animate-slide-up" 
             style={{ boxShadow: '0 0 24px 4px #38b2ac33, 0 0 8px 2px #2563eb22', transition: 'box-shadow 0.5s' }}>
          <h2 className="text-2xl font-semibold text-green-700">Special Thanks</h2>
          <div className="text-blue-900 text-sm" style={{ background: 'rgba(0,0,0,0.02)', padding: '8px', borderRadius: '6px' }}>
            <ul className="list-disc pl-6 space-y-2">
              <li>Distinguished Keynote Speakers</li>
              <li>Technical Program Committee Members</li>
              <li>Paper Reviewers</li>
              <li>Sponsors and Supporting Organizations</li>
              <li>Conference Participants</li>
              <li>Organizing Committee Members</li>
            </ul>
          </div>
        </div>
      </div>
      <SiteFooter />
    </main>
  )
}
