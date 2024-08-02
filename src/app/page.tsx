import Features from '@/components/features'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className='flex min-h-[100vh-4rem] flex-col items-center p-24'>
      <Hero />
      <Features />
    </main>
  )
}
