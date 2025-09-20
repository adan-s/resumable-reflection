import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adan Salman - Associate Software Engineer | AI & Full-Stack Developer',
  description: 'Passionate full-stack developer specializing in AI-driven solutions, modern web technologies, and scalable applications. Building the future with Next.js, Python, and cutting-edge AI tools.',
  keywords: 'Software Engineer, Full-Stack Developer, AI Developer, Next.js, Python, React, Machine Learning, LangChain, OpenAI',
  authors: [{ name: 'Adan Salman' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Adan Salman - Associate Software Engineer',
    description: 'Passionate full-stack developer specializing in AI-driven solutions and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adan Salman - Associate Software Engineer',
    description: 'Passionate full-stack developer specializing in AI-driven solutions and modern web technologies.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://adansalman.dev" />
        <meta name="theme-color" content="#b91c5c" />
      </head>
      <body className={inter.className}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  )
}