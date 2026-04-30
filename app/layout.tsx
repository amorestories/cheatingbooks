import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cheating Books - Serialized Romance Stories',
  description: 'Addictive marriage-in-crisis and revenge romance stories. Read free chapters now.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-2xl font-black tracking-tight text-gray-900">
              Cheating<span className="text-red-600">Books</span>
            </Link>
            <Link
              href="/subscribe"
              className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CheatingBooks. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
