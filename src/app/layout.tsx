import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import ScrollToTop from "@/components/ScrollToTop"
import { ClickBurstEffect } from "@/components/glitter-overlay"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kumod Kumar Sharma - FSWD",
  description:
    "Full Stack Web Developer with expertise in MERN stack. Passionate about creating efficient and scalable web applications.",
  keywords: "Full Stack Developer, MERN Stack, React, Node.js, MongoDB, Express.js, Web Developer",
  authors: [{ name: "Kumod Kumar Sharma" }],
  openGraph: {
    title: "Kumod Kumar Sharma - Full Stack Developer",
    description: "Full Stack Web Developer with expertise in MERN stack",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="hF54soUvSw717cMskFG-hNpjlyVaL0K9bBINQTdcgVU" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <ClickBurstEffect />
        <Navigation />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  )
}
