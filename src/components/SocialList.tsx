import { css } from '../../styled-system/css'
import { hstack } from '../../styled-system/patterns'
import { motion } from 'framer-motion'

import Link from '@/components/Link'

export type Social = {
  name: string
  url: string
  icon: React.ReactNode
}

const buttonStyle = css({
  width: 8,
  height: 8,
  color: 'textBase',
  transition: 'transform 0.2s ease-in-out',
  _hover: { transform: 'translate(0, -3px)', color: 'textBaseLight' },
})

export default function SocialList({ socials }: { socials: Social[] }) {
  return (
    <div className={hstack({ gap: 3 })}>
      { socials.map((social, index) => (
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.6 + index * 0.1,
          }}
          className={hstack({ gap: 3 })}
          key={social.name}
        >
          <Link url={social.url} style={buttonStyle}>{social.icon}</Link>
        </motion.div>),
      ) }
    </div>
  )
}
