import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export default function CommitteePage() {
  return (
  <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #e6fffa 40%, #dbeafe 70%, #f8fafc 100%)' }}>
      <SiteNavbar />
      <section className="mx-auto max-w-6xl px-4 py-12 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-900 drop-shadow-lg mb-6 animate-fade-in">Organizing Committee</h1>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">General Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="https://in3700.wordpress.com/wp-content/uploads/2025/09/1620591758322.jpeg" alt="Dr. A. Sharma" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. Satvik Khara</h3>
              <p className="text-sm text-green-700 mb-1">Dean, Collage of Technology</p>
             
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="https://in3700.wordpress.com/wp-content/uploads/2025/09/1668676239088.jpeg" alt="Prof. B. Singh" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Prof. Digant Parmar</h3>
              <p className="text-sm text-green-700 mb-1">Assistant Professor, Collage of Technology</p>
             
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Dr. C. Patel" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. C. Patel</h3>
              <p className="text-sm text-green-700 mb-1">Affiliation, Country</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-900">Program Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400">
                <img src="/placeholder-user.jpg" alt="Prof. S. Gupta" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-200 transition-all duration-300 hover:border-blue-400" />
                <h3 className="font-bold text-lg text-blue-900 mb-1">Prof. S. Gupta</h3>
                <p className="text-sm text-green-700 mb-1">Affiliation, Country</p>
                
              </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Dr. P. Kumar" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. P. Kumar</h3>
              <p className="text-sm text-green-700 mb-1">Affiliation, Country</p>
              
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Organizing Chairs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
                <img src="/placeholder-user.jpg" alt="Dr. R. Iyer" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
                <h3 className="font-bold text-lg text-blue-900 mb-1">Dr. R. Iyer</h3>
                <p className="text-sm text-green-700 mb-1">Affiliation, Country</p>
                <p className="text-xs text-blue-800">Organizing Chair</p>
              </div>
            <div className="flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
              <img src="/placeholder-user.jpg" alt="Ms. J. Devi" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
              <h3 className="font-bold text-lg text-blue-900 mb-1">Ms. J. Devi</h3>
              <p className="text-sm text-green-700 mb-1">Affiliation, Country</p>
              <p className="text-xs text-blue-800">Organizing Chair</p>
            </div>
          </div>
        </div>

        {/* Add more committee sections as needed (e.g., Technical Program Committee, Advisory Committee) */}

      </section>
      <SiteFooter />
    </main>
  )
}
