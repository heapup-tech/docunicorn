import type { ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'

interface AccordionProps {
  title: string
  children: ComponentChildren
}
export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)
  return (
    <div class='text-neutral-500 transition-all hover:font-medium  py-1'>
      <button
        class='flex w-full justify-between'
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span>+</span>
      </button>
      <div
        class={`grid overflow-hidden transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div class='overflow-hidden'>{children}</div>
      </div>
    </div>
  )
}
