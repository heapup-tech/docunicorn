import React, { useEffect } from 'react'
import clsx from 'clsx'
import { useThemeConfig } from '@docusaurus/theme-common'
import Logo from '@theme/Logo'
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton'
import Content from '@theme/DocSidebar/Desktop/Content'
import type { Props } from '@theme/DocSidebar/Desktop'

import styles from './styles.module.css'

function removeCategoryWithNameIndex(arr) {
  return arr.filter((item) => {
    if (item.type === 'link') {
      const docIds = item.docId.split('/') || []
      if (docIds[docIds.length - 1] === 'index') {
        return false
      }
    }

    if (item.type === 'category' && item.items && item.items.length > 0) {
      item.items = removeCategoryWithNameIndex(item.items)
    }
    return true
  })
}

function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }: Props) {
  const {
    navbar: { hideOnScroll },
    docs: {
      sidebar: { hideable }
    }
  } = useThemeConfig()

  // const [filteredSidebar, setFilteredSidebar] = React.useState(sidebar)
  // useEffect(() => {
  //   sidebar.map((item) => {
  //     if (item.type === 'category' && item.items && item.items.length > 0) {
  //       item.items = removeCategoryWithNameIndex(item.items)
  //     }
  //     return item
  //   })
  //   setFilteredSidebar(removeCategoryWithNameIndex(sidebar))
  // }, [sidebar])

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden
      )}
    >
      {hideOnScroll && (
        <Logo
          tabIndex={-1}
          className={styles.sidebarLogo}
        />
      )}
      <Content
        path={path}
        sidebar={sidebar}
      />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  )
}

export default React.memo(DocSidebarDesktop)
