import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Providers from './providers'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

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
          <div className='flex flex-col justify-between min-h-screen'>
            <AppHeader />
            {children}
            <AppFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
