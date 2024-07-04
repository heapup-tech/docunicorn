import { useColorMode } from '@docusaurus/theme-common'
import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  const { colorMode } = useColorMode()
  return (
    <div
      className={`flex h-24 items-center justify-center border-t  ${
        colorMode === 'dark' ? 'border-t-gray-800' : 'border-t-gray-200'
      }`}
      style={{
        borderTopStyle: 'solid'
      }}
    >
      Copyright © {year} heapup
    </div>
  )
}

export default React.memo(Footer)
