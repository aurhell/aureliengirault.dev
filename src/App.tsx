import { css } from '../styled-system/css'
import { circle } from '../styled-system/patterns'

import { IconEmail, IconGithub, IconLinkedin, IconX } from '@/components/Icon'
import SocialList, { Social } from '@/components/SocialList'
import ButtonThemeToggle from './components/ButtonThemeToggle'
import { ThemeContext } from './ThemeProvider'
import { THEME } from '@/constants'
import { useContext } from 'react'

const mainLayoutStyle = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  h: 'screen',
  w: 'screen',
  background: 'backgroundBase',
  color: 'textBase',
})

function Face() {
  return (
    <img src="face.webp" alt="Aurélien Girault" className={circle({ size: '80' })} />
  )
}

function Name() {
  return (
    <span
      className={css({
        color: 'slate.200',
        fontSize: '6xl',
        fontWeight: 'extrabold',
        background: '#D3244D linear-gradient(to left, #D3244D 0%, #891DC8 72%)',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        _dark: {
          background: '#8FCF2E linear-gradient(to right, #8FCF2E 0%, #4EB5CF 80%)',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
      })}
    >
      Aurélien Girault
    </span>
  )
}

function App() {
  const { theme } = useContext(ThemeContext)

  const iconStyle = css({ width: 8, height: 8, color: 'textBase' })

  const socials: Social[] = [
    {
      name: 'Github',
      url: 'https://github.com/aurhell',
      icon: <IconGithub className={iconStyle} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/a-girault/',
      icon: <IconLinkedin className={iconStyle} />,
    },
    {
      name: 'X',
      url: 'https://twitter.com/aurhell_',
      icon: <IconX className={iconStyle} />,
    },
    {
      name: 'email',
      url: 'mailto:contact@agirault.com',
      icon: <IconEmail className={iconStyle} />,
    },
  ]

  return (
    <div
      className={mainLayoutStyle}
      data-theme={theme === THEME.dark && THEME.dark || THEME.light}
    >
      <div className={css({ 'display':'flex', 'flexGrow':'1', 'flexDirection':'column', 'alignItems':'center', 'justifyContent':'center' })}>
        <ButtonThemeToggle />

        <Face />

        <div>
          <Name />
          <div className={css({ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', fontWeight: 'bold', fontSize: 'lg' })}>
            <span>🧑‍💻 Développeur front-end</span>
            <span>📍 Rennes (hybride ou remote)</span>
          </div>
        </div>
      </div>

      <div className={css({ 'display':'flex', 'flexDirection':'row', 'alignItems':'flex-end', 'justifyContent':'center', 'paddingBottom':'4' })}>
        <SocialList socials={socials} />
      </div>
    </div>
  )
}

export default App
