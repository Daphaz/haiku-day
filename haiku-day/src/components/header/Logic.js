import { useState, useEffect, useContext } from 'react'
import { useTheme } from '@react-navigation/native'
import { ThemeContext } from '~/helpers/context'

const Logic = () => {
  const { colors } = useTheme()
  const [isEnabled, setIsEnabled] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme == 'light') {
      setIsEnabled(false)
    } else {
      setIsEnabled(true)
    }
  }, [theme])

  const toggleSwitch = () => {
    const themeColor = theme === 'light' ? 'dark' : 'light'
    // setIsEnabled(!isEnabled)
    setTheme(themeColor)
  }
  return {
    colors,
    toggleSwitch,
    isEnabled,
  }
}

export default Logic
