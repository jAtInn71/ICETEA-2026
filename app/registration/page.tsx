import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"  

export default function RegistrationPage() {
  return (
    <main>
      <SiteNavbar />
      <section className="mx-auto max-w-4xl px-4 py-10 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-900 drop-shadow-lg mb-2 animate-fade-in">Conference Registration</h1>
        <p className="text-center text-lg text-blue-800 mb-6 animate-fade-in animate-delay-100">Secure your spot at ICETEA 2026! Choose your participation type and register early for discounted rates.</p>
        
        <div className="rounded-2xl p-8 bg-white shadow-xl border border-green-200 animate-fade-in animate-slide-up" style={{ boxShadow: '0 0 32px 8px #38b2ac33, 0 0 12px 4px #2563eb22', transition: 'box-shadow 0.5s' }}>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Registration Fees</h2>
          <div className="w-full overflow-x-auto">
            <table className="min-w-[600px] w-full bg-white border border-blue-200 rounded-lg overflow-hidden text-base">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-3 px-2 md:px-4 text-left text-blue-900 font-semibold whitespace-nowrap">SN</th>
                  <th className="py-3 px-2 md:px-4 text-left text-blue-900 font-semibold whitespace-nowrap">Participation Type</th>
                  <th className="py-3 px-2 md:px-4 text-left text-green-700 font-semibold whitespace-nowrap">Early Bird<br /><span className="text-xs font-normal text-blue-700">Due on: Nov 30, 2025</span></th>
                  <th className="py-3 px-2 md:px-4 text-left text-blue-900 font-semibold whitespace-nowrap">Regular<br /><span className="text-xs font-normal text-green-700">Due on: Jan 10, 2026</span></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="hover:bg-green-50 transition"><td className="py-3 px-2 md:px-4">1</td><td className="py-3 px-2 md:px-4">Student Author</td><td className="py-3 px-2 md:px-4">4000 INR</td><td className="py-3 px-2 md:px-4">6000 INR</td></tr>
                <tr className="hover:bg-green-50 transition"><td className="py-3 px-2 md:px-4">2</td><td className="py-3 px-2 md:px-4">Academic Author</td><td className="py-3 px-2 md:px-4">5000 INR</td><td className="py-3 px-2 md:px-4">7000 INR</td></tr>
                <tr className="hover:bg-green-50 transition"><td className="py-3 px-2 md:px-4">3</td><td className="py-3 px-2 md:px-4">Industry Author</td><td className="py-3 px-2 md:px-4">6000 INR</td><td className="py-3 px-2 md:px-4">8000 INR</td></tr>
                <tr className="hover:bg-blue-50 transition"><td className="py-3 px-2 md:px-4">4</td><td className="py-3 px-2 md:px-4">Foreign Student Author</td><td className="py-3 px-2 md:px-4">70 USD</td><td className="py-3 px-2 md:px-4">90 USD</td></tr>
                <tr className="hover:bg-blue-50 transition"><td className="py-3 px-2 md:px-4">5</td><td className="py-3 px-2 md:px-4">Foreign Academic Author</td><td className="py-3 px-2 md:px-4">80 USD</td><td className="py-3 px-2 md:px-4">100 USD</td></tr>
                <tr className="hover:bg-blue-50 transition"><td className="py-3 px-2 md:px-4">6</td><td className="py-3 px-2 md:px-4">Foreign Industry Author</td><td className="py-3 px-2 md:px-4">90 USD</td><td className="py-3 px-2 md:px-4">110 USD</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Register, Payment, Dates, Contact, and Cancellation condensed below */}
        <div className="rounded-2xl p-6 bg-blue-50 border border-blue-200 shadow-md animate-fade-in animate-delay-200">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">How to Register & Payment</h2>
          <ol className="list-decimal pl-6 space-y-2 text-blue-800 mb-2">
            <li>Fill out the online registration form (link coming soon).</li>
            <li>Select your participation type and calculate your fee.</li>
            <li>Pay via online bank transfer or credit card. Details for bank transfer will be provided upon registration. A secure online payment gateway will be available soon.</li>
            <li>Receive confirmation by email after successful registration.</li>
          </ol>
        </div>
        {/* Registration Button */}
        <div className="flex justify-center mb-8">
        <Link href="/registration/registration_form" className="w-full max-w-xs md:max-w-md">
        <button
         className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-lg px-8 py-4 font-bold rounded-xl shadow-lg hover:shadow-teal-200/50 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-white/20 w-full"
         >
         Register Now
         </button>
        </Link>
        </div>
        <div className="rounded-2xl p-6 bg-green-50 border border-green-200 shadow-md animate-fade-in animate-delay-300">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Important Dates</h2>
          <ul className="list-disc pl-6 space-y-1 text-green-800">
            <li>Early Bird Registration Deadline: <span className="font-semibold">Nov 30, 2025</span></li>
            <li>Regular Registration Deadline: <span className="font-semibold">Jan 10, 2026</span></li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 bg-white border border-blue-200 shadow-md animate-fade-in animate-delay-400">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Contact</h2>
          <p className="text-blue-800">For registration queries, email <a href="mailto:registration@ihcsp.org" className="text-green-700 hover:underline">registration@ihcsp.org</a></p>
        </div>
        <div className="rounded-2xl p-6 bg-red-50 border border-red-200 shadow-md animate-fade-in animate-delay-500">
          <h2 className="text-xl font-semibold text-red-700 mb-2">Cancellation Policy</h2>
          <p className="text-red-800">Cancellations before <span className="font-semibold">Dec 15, 2025</span> are eligible for a 50% refund. No refunds after this date. All refunds processed post-conference.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
