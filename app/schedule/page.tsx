"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"

export default function SchedulePage() {
  return (
    <main style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #e6fffa 40%, #dbeafe 70%, #f8fafc 100%)' }} className="min-h-screen">
      <SiteNavbar />
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-4">
          Conference Schedule
        </h1>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-900">Day 1 – [Date]</h2>
          <div className="rounded-lg border border-blue-200 p-5 shadow-md transition-all duration-500 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-teal-50 hover:to-blue-100 hover:shadow-lg hover:scale-[1.01] hover:-translate-y-1">
            <ul className="space-y-3">
              <li className="opacity-0 animate-[fadeIn_0.5s_0.1s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">09:30</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">10:30</span>
                  <span className="ml-2">Inaugural Ceremony</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.2s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">10:30</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">11:15</span>
                  <span className="ml-2">Keynote Address I</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.3s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">11:15</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">11:30</span>
                  <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">Tea Break</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.4s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">11:30</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">13:00</span>
                  <span className="ml-2">Technical Session I <span className="text-xs font-normal text-blue-600">(All Tracks – Paper Presentations)</span></span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.5s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">13:00</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">14:00</span>
                  <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">Lunch Break</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.6s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">14:00</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">15:30</span>
                  <span className="ml-2">Technical Session II <span className="text-xs font-normal text-blue-600">(All Tracks – Paper Presentations)</span></span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.7s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">15:30</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">15:45</span>
                  <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">Tea Break</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.8s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">15:45</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">17:00</span>
                  <span className="ml-2">Technical Session III <span className="text-xs font-normal text-blue-600">(All Tracks – Paper Presentations)</span></span>
                </h3>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
           <h2 className="text-2xl font-semibold text-blue-900">Day 2 – [Date]</h2>
          <div className="rounded-lg border border-blue-200 p-5 shadow-md transition-all duration-500 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-teal-50 hover:to-blue-100 hover:shadow-lg hover:scale-[1.01] hover:-translate-y-1">
            <ul className="space-y-4">
              <li className="opacity-0 animate-[fadeIn_0.5s_0.1s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">09:30</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">10:00</span>
                  <span className="ml-2">Welcome Address</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.2s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">10:00</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">10:45</span>
                  <span className="ml-2">Keynote Address II</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.3s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">10:45</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">11:00</span>
                  <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">Tea Break</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.4s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">11:00</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">12:30</span>
                  <span className="ml-2">Technical Session IV <span className="text-xs font-normal text-blue-600">(All Tracks – Paper Presentations)</span></span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.5s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">12:30</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">13:30</span>
                  <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">Lunch Break</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.6s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">13:30</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">15:00</span>
                  <span className="ml-2">Technical Session V <span className="text-xs font-normal text-blue-600">(All Tracks – Paper Presentations)</span></span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.7s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">15:00</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">15:15</span>
                  <span className="ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">Tea Break</span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.8s_forwards] transform translate-y-1">
                <h3 className="font-medium text-base flex items-center gap-2">
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">15:15</span>
                  <span>–</span>
                  <span className="inline-block w-14 text-center py-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">16:45</span>
                  <span className="ml-2">Technical Session VI <span className="text-xs font-normal text-blue-600">(All Tracks – Paper Presentations)</span></span>
                </h3>
              </li>
              <li className="opacity-0 animate-[fadeIn_0.5s_0.9s_forwards] transform translate-y-2">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <span className="inline-block w-16 text-center py-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs">16:45</span>
                  <span>–</span>
                  <span className="inline-block w-16 text-center py-1 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs">17:30</span>
                  <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">Valedictory Session</span>
                </h3>
              </li>
            </ul>
          </div>
        </div>

  {/* Day 3 removed as per new schedule plan */}

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
      <SiteFooter />
    </main>
  )
}
