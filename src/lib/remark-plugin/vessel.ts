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
  'note',
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
  if (!children || children.length === 0) return
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
      type: 'element',
      data: {
        hName: 'vessel',
        hProperties: {
          className: `vessel vessel-${vesselNode.type}`
        }
      },
      children: vesselNode.children
    }
    if (vesselNode.title) {
      containerNode.children.unshift({
        type: 'paragraph',
        data: {
          hProperties: {
            'data-vessel-title': ''
          }
        },
        children: [{ type: 'text', value: vesselNode.title }]
      })
    }
    const start = vesselNode.start
    const end = vesselNode.end

    // remove original container nodes and replace with new container node
    parent.children.splice(start, end - start + 1, containerNode)
    vesselNode = null

    return start + 1
  }

  if (vesselNode) {
    vesselNode.children.push(node)

    return
  }
}

export function remarkVessel() {
  return (tree: any) => {
    visit(tree, visitor)
  }
}
