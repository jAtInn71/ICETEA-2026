"use client"

import { useEffect, useRef } from 'react'
import Script from 'next/script'

export function SiteFooter() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#e3f2fd] via-[#e0f7fa] to-[#e8f5e9] text-[#1a237e]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#0072BC] text-lg border-b-2 border-[#0072BC] pb-2">Contact Us</h3>
            <div className="bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="font-medium">Silver Oak University</p>
              <p>Nr. S.G Highway</p>
              <p>Ahmedabad, Gujarat 382481</p>
              <p className="mt-2">
                <a href="mailto:contact@icetea2026.org" 
                   className="hover:underline hover:text-[#39B54A] flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  icetea2026@siverakuni.ac.in
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 79660 46304
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#0072BC] text-lg border-b-2 border-[#0072BC] pb-2">Location</h3>
            <div className="h-[200px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.78406741357975!2d72.53434092597261!3d23.090371607367445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833af6f39347%3A0xf1db9065daea7008!2sSilver%20Oak%20University!5e0!3m2!1sen!2sin!4v1744895318209!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#0072BC] text-lg border-b-2 border-[#0072BC] pb-2">Quick Access</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/call-for-papers", label: "Submit Paper" },
                { href: "/registration", label: "Registration" },
                { href: "/committees", label: "Committees" },
                { href: "/schedule", label: "Schedule" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} 
                     className="hover:text-[#0072BC] transition-colors duration-200 flex items-center gap-2 group">
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#0072BC] text-lg border-b-2 border-[#0072BC] pb-2">Connect With Us</h3>
            <div className="flex flex-col space-y-4">
              {[
                {
                  href: "https://www.instagram.com/icetea2026/",
                  label: "Instagram",
                  icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                },
                {
                  href: "https://www.linkedin.com/company/icetea2026",
                  label: "LinkedIn",
                  icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                },
                {
                  href: "https://www.facebook.com/share/19d69Uj9kc/",
                  label: "Facebook",
                  icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987H8.078v-2.89h2.36V9.845c0-2.337 1.393-3.629 3.523-3.629.992 0 2.031.177 2.031.177v2.23h-1.144c-1.127 0-1.477.7-1.477 1.418v1.704h2.516l-.402 2.89h-2.114V21.9C18.343 21.128 22 16.991 22 12z"
                }
              ].map((social) => (
                <a key={social.href}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 hover:text-[#0072BC] transition-colors duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       className="h-6 w-6 transform group-hover:scale-110 transition-transform"
                       fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-[#0072BC]/20 mt-8">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-[#1a237e]/80">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} ICETEA 2026 - Silver Oak University IEEE Student Branch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
