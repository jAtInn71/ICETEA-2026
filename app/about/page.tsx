import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <main>
      <SiteNavbar />
      <section className="mx-auto max-w-4xl px-4 py-10 space-y-8 bg-white rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">About the Conference</h1>

        <div className="space-y-4 rounded-xl p-6 bg-white shadow-lg border border-green-200 relative animate-fade-in animate-slide-up" style={{ boxShadow: '0 0 24px 4px #38b2ac33, 0 0 8px 2px #2563eb22', transition: 'box-shadow 0.5s' }}>
          <h2 className="text-2xl font-semibold text-green-700">Conference Highlights & SDGs</h2>
          <p className="leading-relaxed text-blue-900">
            ICETEA 2025 brings together experts to advance innovations in fields like AI, Machine Learning, IoT, Cybersecurity, Blockchain, 6G Communication, Quantum Computing, and Sustainability. The conference emphasizes academia-industry collaboration and real-world impact, with a focus on the United Nations Sustainable Development Goals (SDGs):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-blue-900">
            <li><strong className="text-green-700">Education</strong> &rarr; SDG 4: Quality Education</li>
            <li><strong className="text-green-700">Innovation & Infrastructure</strong> &rarr; SDG 9</li>
            <li><strong className="text-green-700">Partnerships for Technology</strong> &rarr; SDGs 9 &amp; 17</li>
            <li><strong className="text-green-700">Societal Benefit</strong> &rarr; SDG 11 &amp; SDG 3</li>
            <li><strong className="text-green-700">Security</strong> &rarr; SDG 16</li>
          </ul>
          <h2 className="text-2xl font-semibold text-green-700">Conference Overview</h2>
          <p className="leading-relaxed text-blue-900">
            The 1st International Conference on Emerging Technologies and Engineering Applications (ICETEA 2026) is a global forum dedicated to advancing innovation in technology and engineering. Our mission is to unite researchers, academics, industry professionals, and thought leaders to share breakthroughs, exchange ideas, and shape the future of emerging technologies.
          </p>
          <p className="leading-relaxed text-blue-900">
            ICETEA 2026 provides a vibrant platform for exploring advancements in Artificial Intelligence, Machine Learning, IoT, Cybersecurity, Blockchain, 6G Communication, Quantum Computing, and Sustainability Technology. The conference encourages collaboration and knowledge exchange to drive real-world impact and societal progress.
          </p>
        </div>

  <div className="space-y-4 rounded-xl p-6 bg-white shadow-lg border border-blue-200 relative animate-fade-in animate-slide-up" style={{ boxShadow: '0 0 24px 4px #2563eb33, 0 0 8px 2px #38b2ac22', transition: 'box-shadow 0.5s' }}>
          <h2 className="text-2xl font-semibold text-green-700">Our Vision</h2>
          <p className="leading-relaxed text-blue-900">
            To be a leading international forum for high-quality research and interdisciplinary dialogue in emerging technologies and engineering applications, contributing to a smarter, more sustainable, and inclusive future.
          </p>
        </div>

  <div className="space-y-4 rounded-xl p-6 bg-white shadow-lg border border-green-200 relative animate-fade-in animate-slide-up" style={{ boxShadow: '0 0 24px 4px #38b2ac33, 0 0 8px 2px #2563eb22', transition: 'box-shadow 0.5s' }}>
          <h2 className="text-2xl font-semibold text-green-700">Organizing Body</h2>
          <p className="leading-relaxed text-blue-900">
            ICETEA 2026 is proudly organized by Silver Oak University, Ahmedabad, a renowned institution committed to excellence in research and education. With a strong focus on interdisciplinary studies and real-world impact, Silver Oak University provides an ideal environment for fostering innovation and knowledge exchange.
          </p>
        </div>

  <div className="space-y-4 rounded-xl p-6 bg-white shadow-lg border border-blue-200 relative animate-fade-in animate-slide-up" style={{ boxShadow: '0 0 24px 4px #2563eb33, 0 0 8px 2px #38b2ac22', transition: 'box-shadow 0.5s' }}>
          <h2 className="text-2xl font-semibold text-green-700">Why Attend ICETEA?</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-900">
            <li><strong className="text-green-700">Cutting-Edge Research:</strong> Discover the latest advancements and trends from leading experts.</li>
            <li><strong className="text-green-700">Networking Opportunities:</strong> Connect with peers, potential collaborators, and industry leaders.</li>
            <li><strong className="text-green-700">Publication Opportunities:</strong> Present your work and contribute to high-quality conference proceedings.</li>
            <li><strong className="text-green-700">Interdisciplinary Focus:</strong> Explore diverse perspectives at the convergence of technology and engineering.</li>
            <li><strong className="text-green-700">Inspiring Keynotes:</strong> Learn from distinguished speakers who are shaping the future of these fields.</li>
          </ul>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}