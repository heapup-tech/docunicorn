import React from 'react'
import clsx from 'clsx'
import ArrowLeft from '@site/src/components/icons/arrow-left'
import ArrowRight from '@site/src/components/icons/arrow-right'
import Link from '@docusaurus/Link'
import type { Props } from '@theme/PaginatorNavLink'

export default function PaginatorNavLink(props: Props): JSX.Element {
  const { permalink, title, subLabel, isNext } = props
  return (
    <Link
      className={clsx(
        'transition-all duration-200 ease-in-out hover:bg-neutral-100 py-2 px-4 border-neutral-200 rounded-lg block border-solid border hover:no-underline group text-sm',
        isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'
      )}
      to={permalink}
    >
      {subLabel && (
        <div
          className={`flex items-center gap-x-1 mb-1 ${
            isNext && ' justify-end'
          }`}
        >
          {!isNext && (
            <ArrowLeft
              style={{
                color: 'var(--ifm-color-content-secondary)'
              }}
            />
          )}
          <div className='pagination-nav__sublabel text-sm font-medium  no-underline mb-0'>
            {subLabel}
          </div>
          {isNext && (
            <ArrowRight
              style={{
                color: 'var(--ifm-color-content-secondary)'
              }}
            />
          )}
        </div>
      )}
      <div className='font-medium text-base break-words no-underline'>
        {title}
      </div>
    </Link>
  )
}
