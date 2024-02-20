import { css } from '../styled-system/css'
import { circle } from '../styled-system/patterns'
import { useContext } from 'react'
import { motion } from 'framer-motion'

import { IconEmail, IconGithub, IconLinkedin, IconX } from '@/components/Icon'
import SocialList, { Social } from '@/components/SocialList'
import ButtonThemeToggle from '@/components/ButtonThemeToggle'
import { ThemeContext } from '@/ThemeProvider'
import { THEME } from '@/constants'

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
    <motion.img
      src="face.webp"
      alt="Aurélien Girault"
      className={circle({ size: { base: '64', _landscape: { base: '32', lg: '80' }, lg: '80' } })}
      initial={{ scale: 3, rotate: 180, opacity: 0 }}
      animate={{ rotate: 360, scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 40,
        duration: 80,
        delay: 1,
      }}
    />
  )
}

function Name() {
  return (
    <motion.div
      initial={{ y: -800, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
      }}
    >
      <span
        className={css({
          color: 'slate.200',
          fontSize: '6xl',
          fontWeight: 'extrabold',
          background: '#D3244D linear-gradient(to left, #D3244D 0%, #891DC8 72%)',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 'tight',
          _dark: {
            background: '#8FCF2E linear-gradient(to right, #8FCF2E 0%, #4EB5CF 80%)',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          },
        })}
      >
      Aurélien Girault
      </span>
    </motion.div>
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

        <div className={css({ textAlign: 'center' })}>
          <Name />
          <div className={css({ display: 'flex', flexDirection: 'column', fontWeight: 'bold', fontSize: 'lg', textAlign: { base: 'center', lg: 'left' }, marginTop: { base: 4, lg: 0 } })}>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.4,
              }}
            >🧑‍💻 Développeur front-end</motion.span>
            <motion.span
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.6,
              }}
            >📍 Rennes (hybride ou remote)</motion.span>
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
