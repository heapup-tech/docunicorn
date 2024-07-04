import LinkButton from './link-button'

export default function Hero() {
  return (
    <div className='relative m-auto mt-16 flex h-96 max-w-3xl items-center justify-center py-4 text-center'>
      <div className='relative z-10'>
        <h1 className='text-4xl font-semibold '>
          Free document template, Powered by Docusaurus
        </h1>
        <p className='mt-2 text-xl text-stone-400'>
          Build faster websites with markdown in minutes.
        </p>

        <div className='mt-4'>
          <LinkButton
            href='https://github.com/heapup-tech/heapup-docs-template'
            className='bg-stone-800 text-white hover:bg-stone-800/90'
            size='lg'
          >
            Get Template
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
