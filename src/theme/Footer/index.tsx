import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='flex h-24 items-center justify-center border-t text-black'>
      Copyright © {year} heapup
    </footer>
  )
}

export default React.memo(Footer)
