import { css } from '../styled-system/css'
import { circle } from '../styled-system/patterns'

import { IconEmail, IconGithub, IconLinkedin, IconX } from '@/components/Logo'
import SocialList, { Social } from '@/components/SocialList'

const mainLayoutStyle = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  h: 'screen',
  w: 'screen',
  bgGradient: 'to-r',
  gradientFrom: 'gray.800',
  gradientVia: 'gray.900',
  gradientTo: 'gray.800',
  color: 'slate.100',
})

function Face() {
  return (
    <img src="face.webp" alt="Aurélien Girault" className={circle({ size: '80' })} />
  )
}

function App() {
  const socials: Social[] = [
    {
      name: 'Github',
      url: 'https://github.com/aurhell',
      icon: <IconGithub className={css({ width: 8, height: 8 })} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/a-girault/',
      icon: <IconLinkedin className={css({ width: 8, height: 8 })} />,
    },
    {
      name: 'X',
      url: 'https://twitter.com/aurhell_',
      icon: <IconX className={css({ width: 8, height: 8 })} />,
    },
    {
      name: 'email',
      url: 'mailto:contact@agirault.com',
      icon: <IconEmail className={css({ width: 8, height: 8 })} />,
    },
  ]

  return (
    <div
      className={mainLayoutStyle}
    >
      <div className={css({'display':'flex', 'flexGrow':'1', 'flexDirection':'column', 'alignItems':'center', 'justifyContent':'center'})}>
        <Face />
        <div>
          <span
            className={css({
              color: 'slate.200',
              fontSize: '6xl',
              fontWeight: 'extrabold',
              background: '#8FCF2E linear-gradient(to right, #8FCF2E 0%, #4EB5CF 80%)',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            })}
          >
            Aurélien Girault
          </span>
          <div className={css({ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', fontWeight: 'medium' })}>
            <span>🧑‍💻 Développeur front-end</span>
            <span>📍 Rennes (hybride ou remote)</span>
          </div>
        </div>
      </div>

      <div className={css({'display':'flex', 'flexDirection':'row', 'alignItems':'flex-end', 'justifyContent':'center', 'paddingBottom':'4'})}>
        <SocialList socials={socials} />
      </div>
    </div>
  )
}

export default App
