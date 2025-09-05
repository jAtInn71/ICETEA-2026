
// import { SiteNavbar } from "@/components/site-navbar"
// import { SiteFooter } from "@/components/site-footer"

// export default function SpeakersPage() {
//   return (
//     <main style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #e6fffa 40%, #dbeafe 70%, #f8fafc 100%)' }} className="min-h-screen">
//       <SiteNavbar />
//       <section className="mx-auto max-w-6xl px-4 py-12 space-y-10">
//         <h1 className="text-4xl font-bold text-center text-blue-900 drop-shadow-lg mb-6 animate-fade-in">Our Esteemed Speakers</h1>
//
//         <div className="space-y-6">
//           <h2 className="text-2xl font-semibold text-green-700">Keynote Speakers</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {/* Speaker 1 */}
//             <div className="relative flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400">
//               <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">Keynote</span>
//               <img src="/placeholder-user.jpg" alt="Speaker 1 Name" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
//               <h3 className="font-bold text-lg text-blue-900 mb-1">Speaker 1 Name</h3>
//               <p className="text-sm text-green-700 mb-1">Affiliation 1</p>
//               <p className="text-xs text-blue-800 mb-1">Talk Title: [Keynote Title 1]</p>
//               <p className="text-xs text-blue-800 mb-2">Brief Bio 1...</p>
//               {/* Removed animated star icon for cleaner look */}
//             </div>
//             {/* Speaker 2 */}
//             <div className="relative flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400">
//               <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">Keynote</span>
//               <img src="/placeholder-user.jpg" alt="Speaker 2 Name" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200 transition-all duration-300 hover:border-green-400" />
//               <h3 className="font-bold text-lg text-blue-900 mb-1">Speaker 2 Name</h3>
//               <p className="text-sm text-green-700 mb-1">Affiliation 2</p>
//               <p className="text-xs text-blue-800 mb-1">Talk Title: [Keynote Title 2]</p>
//               <p className="text-xs text-blue-800 mb-2">Brief Bio 2...</p>
//               {/* Removed animated star icon for cleaner look */}
//             </div>
//           </div>
//         </div>
//
//         <div className="space-y-6">
//           <h2 className="text-2xl font-semibold text-blue-900">Invited Speakers</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {/* Speaker 3 */}
//             <div className="relative flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
//               <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">Invited</span>
//               <img src="/placeholder-user.jpg" alt="Speaker 3 Name" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-200 transition-all duration-300 hover:border-blue-400" />
//               <h3 className="font-bold text-lg text-blue-900 mb-1">Speaker 3 Name</h3>
//               <p className="text-sm text-green-700 mb-1">Affiliation 3</p>
//               <p className="text-xs text-blue-800 mb-1">Talk Title: [Invited Talk Title 1]</p>
//               <p className="text-xs text-blue-800 mb-2">Brief Bio 3...</p>
//               {/* Removed animated star icon for cleaner look */}
//             </div>
//             {/* Speaker 4 */}
//             <div className="relative flex flex-col items-center text-center rounded-2xl p-6 bg-white shadow-xl border border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
//               <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse">Invited</span>
//               <img src="/placeholder-user.jpg" alt="Speaker 4 Name" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-200 transition-all duration-300 hover:border-blue-400" />
//               <h3 className="font-bold text-lg text-blue-900 mb-1">Speaker 4 Name</h3>
//               <p className="text-sm text-green-700 mb-1">Affiliation 4</p>
//               <p className="text-xs text-blue-800 mb-1">Talk Title: [Invited Talk Title 2]</p>
//               <p className="text-xs text-blue-800 mb-2">Brief Bio 4...</p>
//               {/* Removed animated star icon for cleaner look */}
//             </div>
//           </div>
//         </div>
//
//         {/* Add more speaker categories as needed */}
//
//       </section>
//       <SiteFooter />
//     </main>
//   )
// }