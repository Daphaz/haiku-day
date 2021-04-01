import { useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { setThemeLocal } from '~/helpers/constants'

const Logic = (setTheme, theme) => {
  const { colors } = useTheme()
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
    setIsEnabled(!isEnabled)
    if (theme === 'no-preference') {
      setThemeLocal('light')
    } else if (theme === 'light') {
      setThemeLocal('dark')
    } else {
      setThemeLocal('light')
    }
  }
  return {
    colors,
    toggleSwitch,
    isEnabled,
  }
}

export default Logic
