import { useColorMode } from '@docusaurus/theme-common'

const features = [
  {
    icon: '/img/react.svg',
    title: 'Powered by React',
    description: 'Use react to bring faster access speed to your website.'
  },
  {
    icon: '/img/design.svg',
    title: 'Modern design',
    description:
      'The exquisite modern style design provides visitors with an attractive experience.'
  },
  {
    icon: '/img/markdown.svg',
    title: 'Markdwon',
    description: 'Support using markdown or mdx to write your website content.'
  },
  {
    icon: '/img/custom.svg',
    title: 'Customization',
    description: 'Custom components to override built-in components.'
  }
]
export default function Features() {
  const { colorMode } = useColorMode()
  return (
    <div className='container m-auto mb-20 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4'>
      {features.map((feature) => (
        <div
          className={`rounded-md  p-4 ${
            colorMode === 'dark' ? 'bg-gray-600' : 'bg-gray-100'
          }`}
          key={feature.title}
        >
          <img
            className='flex h-12 w-12 items-center justify-center rounded-md bg-slate-300 p-2'
            src={feature.icon}
            alt=''
          />
          <h1
            className={`mt-4 text-xl font-semibold mb-2 ${
              colorMode === 'dark' && 'text-black'
            }`}
          >
            {feature.title}
          </h1>
          <p
            className={`mt-1  ${
              colorMode === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}
