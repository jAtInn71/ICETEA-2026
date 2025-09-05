export function SiteFooter() {
  return (
  <footer className="w-full bg-gradient-to-r from-[#e3f2fd] via-[#e0f7fa] to-[#e8f5e9] text-[#1a237e]">
  <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-2">
          <h3 className="font-semibold text-[#0072BC]">Contact Us</h3>
          <p>Your Institution Name</p>
          <p>Your Address Line 1</p>
          <p>Your Address Line 2</p>
          <p>Email: <a href="mailto:info@example.com" className="hover:underline hover:text-[#39B54A]">info@example.com</a></p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-[#0072BC]">Quick Links</h3>
          <ul>
            <li><a href="/" className="hover:underline hover:text-[#0072BC]">Home</a></li>
            <li><a href="/call-for-papers" className="hover:underline hover:text-[#0072BC]">Call for Paper</a></li>
            <li><a href="/submission" className="hover:underline hover:text-[#0072BC]">Submission</a></li>
            <li><a href="/registration" className="hover:underline hover:text-[#0072BC]">Registration</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-[#0072BC]">Popular Links</h3>
          <ul>
            <li><a href="/committees" className="hover:underline hover:text-[#0072BC]">Committees</a></li>
            
            <li><a href="/schedule" className="hover:underline hover:text-[#0072BC]">Schedule</a></li>
            
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-[#0072BC]">Follow Us</h3>
          <div className="flex space-x-4 items-center">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="hover:text-[#0072BC]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0072BC]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z"/>
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" aria-label="X" className="hover:text-[#0072BC]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M17.53 3.5h3.47l-7.57 8.62 8.92 11.38h-7.02l-5.52-7.04-6.31 7.04h-3.49l8.09-9.04-8.67-10.96h7.13l4.97 6.35z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-[#0072BC]/20">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-[#1a237e]/80">
          <p style={{all: 'unset'}}>
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </footer>
  )
}
