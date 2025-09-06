import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function STPPage() {
  return (
    <main>
      <SiteNavbar />
      <section className="mx-auto max-w-4xl px-4 py-10 space-y-8">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900">Submit The Papers</h1>
        {/* Responsive Submit the Paper button after header */}
        <div className="flex justify-center mt-6 mb-8">
          <Link href="https://cmt3.research.microsoft.com">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-lg px-8 py-6 font-bold rounded-xl \
                shadow-lg hover:shadow-teal-200/50 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 \
                transition-all duration-300 border-2 border-transparent hover:border-white/20 w-full max-w-xs md:max-w-none"
            >
              Submit the Paper
            </Button>
          </Link>
        </div>

        {/* Track I */}
        <div className="rounded-xl p-6 bg-white shadow-lg border border-green-200 animate-fade-in animate-slide-up mb-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400" style={{ boxShadow: '0 0 32px 8px #38b2ac33, 0 0 12px 4px #2563eb22' }}>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Track I: Artificial Intelligence, Machine Learning, and Quantum Computing</h2>
          <ul className="list-disc pl-6 text-blue-900 mt-2">
            <li>Deep Learning, Neural Networks, and Generative AI (SDG 9)</li>
            <li>Natural Language Processing and Computer Vision (SDG 4)</li>
            <li>AI for Healthcare, Education, Finance, and Industry (SDG 3, SDG 4)</li>
            <li>Robotics, Reinforcement Learning, and Autonomous Systems (SDG 9)</li>
            <li>Quantum Algorithms, Quantum Cryptography, and Quantum Machine Learning (SDG 16)</li>
          </ul>
        </div>
        {/* Track II */}
        <div className="rounded-xl p-6 bg-white shadow-lg border border-blue-200 animate-fade-in animate-slide-up mb-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400" style={{ boxShadow: '0 0 32px 8px #2563eb33, 0 0 12px 4px #38b2ac22' }}>
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">Track II: IoT, Smart Systems, and Next-Generation Communication (5G/6G)</h2>
          <ul className="list-disc pl-6 text-blue-900 mt-2">
            <li>IoT Architectures and Smart City Applications (SDG 11)</li>
            <li>Edge and Fog Computing for Real-Time Data Processing (SDG 9)</li>
            <li>Smart Agriculture and Environmental Monitoring (SDG 2, SDG 13)</li>
            <li>Industrial IoT, Automation, and Industry 4.0 (SDG 9)</li>
            <li>5G/6G Networks, Wireless, Optical, and Satellite Communication (SDG 9, SDG 17)</li>
          </ul>
        </div>
        {/* Track III */}
        <div className="rounded-xl p-6 bg-white shadow-lg border border-green-200 animate-fade-in animate-slide-up mb-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400" style={{ boxShadow: '0 0 32px 8px #38b2ac33, 0 0 12px 4px #2563eb22' }}>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Track III: Cybersecurity, Blockchain, and Sustainable Technologies for Society</h2>
          <ul className="list-disc pl-6 text-blue-900 mt-2">
            <li>Cybersecurity Frameworks, Threat Intelligence, and Data Privacy (SDG 16)</li>
            <li>Blockchain for Finance, Supply Chains, and Governance (SDG 8, SDG 16)</li>
            <li>Smart Contracts, DApps, and Digital Trust Models (SDG 16)</li>
            <li>Renewable Energy Systems, Smart Grids, and Green Manufacturing (SDG 7, SDG 12)</li>
            <li>Waste Management, Circular Economy, and Climate-Resilient Infrastructure (SDG 12, SDG 13)</li>
          </ul>
        </div>
        <div className="text-center pt-6">
          <Link href="https://cmt3.research.microsoft.com">
            <Button size="lg" className="bg-blue-900 text-white font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-200">Submit Article</Button>
          </Link>
        </div>

        <div className="space-y-4 rounded-xl p-6 bg-white shadow-lg border border-blue-200 animate-fade-in animate-slide-up" style={{ boxShadow: '0 0 24px 4px #2563eb33, 0 0 8px 2px #38b2ac22', transition: 'box-shadow 0.5s' }}>
          <h2 className="text-2xl font-semibold text-green-700">Important Dates</h2>
          <table className="w-full text-blue-900 border border-green-200 rounded-lg overflow-hidden">
            <thead className="bg-green-50">
              <tr>
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-4">Paper submission starts</td><td className="py-2 px-4">--</td></tr>
              <tr><td className="py-2 px-4">Paper submission deadline</td><td className="py-2 px-4">--</td></tr>
              <tr><td className="py-2 px-4">Notification of acceptance</td><td className="py-2 px-4">--</td></tr>
              <tr><td className="py-2 px-4">Early bird Registration ends</td><td className="py-2 px-4">--</td></tr>
              <tr><td className="py-2 px-4">Regular Registration ends</td><td className="py-2 px-4">--</td></tr>
              <tr><td className="py-2 px-4">Camera-ready Submissions</td><td className="py-2 px-4">--</td></tr>
              <tr><td className="py-2 px-4">Conference Dates</td><td className="py-2 px-4">--</td></tr>
            </tbody>
          </table>
        </div>

       
         
      </section>
      <SiteFooter />
    </main>
  )
}
