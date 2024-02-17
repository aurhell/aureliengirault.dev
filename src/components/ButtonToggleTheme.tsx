import { useContext } from 'react'
import { css } from '../../styled-system/css'

import { ThemeContext } from '@/ThemeProvider'
import { IconMoon, IconSun } from '@/components/Icon'

const buttonStyle = css({ position: 'absolute', right: '16px', top: '16px', _hover: { cursor: 'pointer' } })
const IconSunStyle = css({ width: 8, height: 8, color: 'yellow.400', _hover: { color: 'yellow.200' } })
const IconMoonStyle = css({ width: 8, height: 8, color: 'sky.900', _hover: { color: 'sky.700' } })

export default function DarkModeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme} className={buttonStyle}>
      { theme === 'dark' && <IconSun className={IconSunStyle} /> || <IconMoon className={IconMoonStyle} /> }
    </button>
  )
}
