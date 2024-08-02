'use client'

import Link from 'next/link'
import { Icons } from './icons'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { siteConfig } from '@/config/site'
import dynamic from 'next/dynamic'
import { docsConfig } from '@/config/docs'
import { usePathname } from 'next/navigation'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { MobileNav } from './mobile-nav'
import { MainNav } from './main-nav'
const ModeToggle = dynamic(() => import('./mode-toggle'), { ssr: false })

export default function AppHeader() {
  const pathname = usePathname()

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-sm bg-transparent'>
      <div className='container flex h-16 items-center flex-between'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center space-x-2 justify-end'>
          <Link
            href={siteConfig.links.github}
            target='_blank'
          >
            <div
              className={cn(
                buttonVariants({
                  variant: 'ghost'
                }),
                'w-9 px-0'
              )}
            >
              <Icons.gitHub className='h-4 w-4' />
              <span className='sr-only'>GitHub</span>
            </div>
          </Link>

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
