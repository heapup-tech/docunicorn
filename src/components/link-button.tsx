import ArrowRight from './icons/arrow-right'

interface LinkButtonProps {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-8 rounded-md px-3 text-xs',
  md: 'h-9 px-4 py-2 text-md',
  lg: 'h-10 rounded-md px-8 text-lg'
}

export default function LinkButton({
  size = 'md',
  href,
  children
}: React.PropsWithChildren<LinkButtonProps>) {
  return (
    <button
      className={`focus-visible:outline-non focus-visible:ring-ring group inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 border-none hover:cursor-pointer bg-neutral-800 hover:bg-neutral-800/90 text-white ${sizes[size]}`}
      onClick={() => window.open(href, '_blank')}
    >
      <span className='mr-2'>{children}</span>
      <ArrowRight />
    </button>
  )
}
