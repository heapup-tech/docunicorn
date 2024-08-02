'use client'

import * as React from 'react'
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/components/ui/button'

interface CopyButtonProps extends ButtonProps {
  value: string
}

/**
.code-block_copyButton__uo5Yu.code-block_copyButtonCopied__fMOZ5 svg {
    animation: code-block_hide__enoxr 1.25s forwards
}

.code-block_copyButton__uo5Yu.code-block_copyButtonCopied__fMOZ5 svg:nth-child(2) {
    animation: code-block_show__KnRqc 1.25s .15s forwards
}

@keyframes code-block_show__KnRqc {
    0% {
        opacity: 0;
        transform: translate(-50%,-50%) scale(.5)
    }

    20% {
        opacity: 1;
        transform: translate(-50%,-50%)
    }

    60% {
        opacity: 1;
        transform: translate(-50%,-50%)
    }

    80% {
        opacity: 0;
        transform: translate(-50%,-50%) scale(.5)
    }

    to {
        opacity: 0;
        transform: translate(-50%,-50%) scale(.5)
    }
}

@keyframes code-block_hide__enoxr {
    0% {
        opacity: 1;
        transform: translate(-50%,-50%)
    }

    20% {
        opacity: 0;
        transform: translate(-50%,-50%) scale(.5)
    }

    80% {
        opacity: 0;
        transform: translate(-50%,-50%) scale(.5)
    }

    to {
        opacity: 1;
        transform: translate(-50%,-50%)
    }
}
 */

export function CopyButton({ className, value, ...props }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 1400)
    }
  }, [copied])

  return (
    <Button
      size='icon'
      variant='ghost'
      className={cn(
        className,
        'z-10 h-6 w-6 [&_svg]:size-5 bg-transparent hover:bg-transparent',
        copied &&
          '[&_svg]:animate-code-block-hide [&_svg:nth-of-type(2)]:animate-code-block-show'
      )}
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(value)
          setCopied(true)
        }
      }}
      {...props}
    >
      <span className='sr-only'>Copy</span>

      <CopyIcon className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' />

      <CheckIcon className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-0' />
    </Button>
  )
}
