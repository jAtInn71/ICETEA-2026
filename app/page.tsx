import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  // Enable smooth scroll for the whole site
  if (typeof window !== "undefined") {
    document.documentElement.style.scrollBehavior = "smooth";
  }

  return (
    <main>
      <SiteNavbar />
      <section className="relative py-24 md:py-32" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #e6fffa 40%, #dbeafe 70%, #f8fafc 100%)' }}>
        {/* Tech pattern background */}
        <div className="absolute inset-0" style={{ 
          background: 'url(/circuit-bg.svg) center/cover no-repeat', 
          opacity: 0.12,
          animation: 'pulse 8s infinite alternate' 
        }}></div>
        
        <div className="relative mx-auto max-w-6xl px-4 text-center z-10">
          {/* Conference Logo */}
          <div className="relative mx-auto w-24 h-24 mb-6 md:w-40 md:h-40 md:mb-8 flex items-center justify-center">
            <Link href="/">
              <img 
                src="https://setumadhavani-ldnja.wordpress.com/wp-content/uploads/2025/09/gemini_generated_image_3rjetk3rjetk3rje.png" 
                alt="ICETEA 2026" 
                className="w-20 h-20 md:w-36 md:h-36 object-contain animate-pulse cursor-pointer rounded-full bg-white shadow-md" 
                style={{filter: 'drop-shadow(0 0 8px rgba(0,191,174,0.4))'}}
              />
            </Link>
            <div className="absolute inset-0 rounded-full border-2 md:border-4 border-blue-400 opacity-60 md:opacity-75 animate-ping"></div>
          </div>
          
          {/* Title with enhanced gradient and animation */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent" style={{textShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
              1st International Conference on<br/>
              <span className="text-blue-900">Emerging Technologies and Engineering Applications</span>
            </span>
          </h1>
          
          {/* Conference info with badge */}
          <div className="relative mb-8 transition-all duration-300 hover:scale-[1.03]">
            <div className="inline-block px-0 py-0">
              <p className="text-2xl md:text-3xl font-bold text-blue-900 tracking-wide mb-2">
                ICETEA 2026<br/>
                <span className="ml-3 px-3 py-1 rounded-full text-sm font-semibold text-teal-700 align-center">February 19–20, 2026</span>
              </p>
              <p className="text-lg text-blue-700 font-medium text-center">
                College of Technology, Silver Oak University, Ahmedabad, India<br/>
                <span className="inline-block mt-2 text-xs font-bold text-blue-800">Hybrid Mode</span>
              </p>
            </div>
          </div>
          
          {/* Call-to-action buttons with enhanced styling */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Link href="https://cmt3.research.microsoft.com">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-lg px-8 py-6 font-bold rounded-xl 
                shadow-lg hover:shadow-teal-200/50 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 
                transition-all duration-300 border-2 border-transparent hover:border-white/20">
                Submit the Paper
              </Button>
            </Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrxK_gDjZViDhofrUlnJwpdZDEQxGNoo_78zi4EjYZJSXFNA/formResponse?pli=1" target="_blank" rel="noopener">
              <Button size="lg" className="bg-white text-blue-700 text-lg px-8 py-6 font-bold rounded-xl border-2 
                border-blue-700 shadow-lg hover:bg-blue-50 hover:shadow-blue-200/50 hover:shadow-2xl 
                hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                Call for Reviewer
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 animate-fade-in bg-gradient-to-br from-blue-50 via-white to-teal-50 p-8 rounded-lg m-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-700 animate-slide-up">About the Conference</h2>
        <p className="text-blue-900 leading-relaxed mb-6 animate-fade-in">
          ICETEA 2026 is a global forum for innovation in Emerging Technologies and Engineering Applications. The conference brings together researchers, academicians, and industry leaders to exchange knowledge in Artificial Intelligence, Machine Learning, IoT, Cybersecurity, Blockchain, 6G Communication, Quantum Computing, and Sustainability Technology. Join us in Ahmedabad, India, or online, to shape the future of technology and society.
        </p>
      </section>

      

      <section className="mx-auto max-w-6xl px-4 pb-12 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">Ahmedabad at a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg border border-teal-200 p-4 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in animate-delay-100">
            <img src="https://setumadhavani-qrmyo.wordpress.com/wp-content/uploads/2025/09/download.jpeg" alt="Sabarmati Ashram" className="w-full h-40 object-cover rounded-lg mb-2" />
            <span className="font-semibold text-blue-900">Sabarmati Ashram</span>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg border border-blue-200 p-4 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in animate-delay-200">
            <img src="https://setumadhavani-qrmyo.wordpress.com/wp-content/uploads/2025/09/download.jpg" alt="Ahmedabad Heritage" className="w-full h-40 object-cover rounded-lg mb-2" />
            <span className="font-semibold text-blue-900">Ahmedabad Heritage</span>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg border border-teal-200 p-4 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in animate-delay-300">
            <img src="https://setumadhavani-qrmyo.wordpress.com/wp-content/uploads/2025/09/licensed-image.jpg" alt="Ahmedabad City" className="w-full h-40 object-cover rounded-lg mb-2" />
            <span className="font-semibold text-blue-900">Ahmedabad City</span>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-lg border border-blue-200 p-4 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in animate-delay-400">
            <img src="https://setumadhavani-qrmyo.wordpress.com/wp-content/uploads/2025/09/download1.jpg" alt="Ahmedabad Culture" className="w-full h-40 object-cover rounded-lg mb-2" />
            <span className="font-semibold text-blue-900">Ahmedabad Culture</span>
          </div>
        </div>
        <div className="mt-6 text-gray-800 text-lg animate-fade-in">
          <ul className="list-disc pl-6">
            <li>Sabarmati Ashram: The spiritual home of Mahatma Gandhi</li>
            <li>Heritage Sites: Stepwells, pols, and ancient temples</li>
            <li>Modern Landmarks: Science City, Riverfront, and more</li>
            <li>Renowned for education, technology, and innovation</li>
            <li>Silver Oak University, Near S G Highway, Ahmedabad, Gujarat 38248</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
