import { hstack } from '../../styled-system/patterns'

import Link from '@/components/Link'

export type Social = {
  name: string
  url: string
  icon: React.ReactNode
}

export default function SocialList({ socials }: { socials: Social[] }) {
  return (
    <div className={hstack({ gap: 3 })}>
      { socials.map(social => (<Link key={social.name} url={social.url}>{social.icon}</Link>)) }
    </div>
  )
}
