import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Providers from './providers'
import AppHeader from '@/components/app-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Docunicorn',
  description: 'Doc template'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <AppHeader />
          {children}
        </Providers>
      </body>
    </html>
  )
}
