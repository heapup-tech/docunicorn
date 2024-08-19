import type { Paragraph, Parent, Text } from 'mdast'
import { visit, Visitor, VisitorResult } from 'unist-util-visit'

export interface VesselNode {
  type: string
  title?: string
  children: Paragraph[]
  start: number
  end: number
}

const VESSEL_TYPES = [
  'info',
  'tip',
  'warning',
  'danger',
  'details',
  'code-group'
]
const VESSEL_START = new RegExp(
  `^:{3}(?:\\s*)(${VESSEL_TYPES.join('|')}) ?(.+)?`
)
const VESSEL_END = /\s*\n*?:{3}$/
let vesselNode: VesselNode | null = null
let allVesselNodes: VesselNode[] = []

const visitor: Visitor<Paragraph, Parent> = (
  node,
  index,
  parent
): VisitorResult => {
  if (!parent) return

  const { children } = node

  if (children.length === 0 || children[0].type !== 'text') return

  const firstChild = node.children[0] as Text
  const firstChildValue = firstChild.value

  const startMatch = firstChildValue.match(VESSEL_START)

  if (startMatch) {
    vesselNode = {
      type: startMatch[1],
      title: startMatch[2] || '',
      children: [],
      start: index || 0,
      end: 0
    }

    return
  }
  const endMatch = firstChildValue.match(VESSEL_END)

  if (endMatch && vesselNode) {
    vesselNode.end = index!

    allVesselNodes.push(vesselNode)

    const containerNode: any = {
      type: 'vessel',
      data: {
        hName: 'div',
        hProperties: {
          className: `vessel ${vesselNode.type}`
        }
      },
      children: [
        {
          type: 'jsx',
          value: `<Vessel>${vesselNode.title}</Vessel>`,
          children: [{ type: 'text', value: vesselNode.title }]
        },
        ...vesselNode.children
      ]
    }

    // remove original container nodes and replace with new container node
    parent.children.splice(
      vesselNode.start!,
      vesselNode.end! - vesselNode.start! + 1,
      containerNode
    )
    vesselNode = null

    return
  }

  if (vesselNode) {
    vesselNode.children.push(node)
    return
  }
}

export function remarkVessel() {
  return (tree: any) => {
    visit(tree, 'paragraph', visitor)
  }
}
