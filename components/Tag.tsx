import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <span
      className="mr-3 text-sm font-medium uppercase text-primary-500"
    >
      {text.split(' ').join('-')}
    </span>
  )
}

export default Tag
