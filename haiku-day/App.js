import React, { useState } from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, DarkTheme } from './src/theme'
import { ThemeContext, OnboardContext } from './src/helpers/context'
import Navigation from './Navigation'

export default function App() {
  const colorScheme = useColorScheme()
  const [theme, setTheme] = useState(colorScheme)
  const [showOnboard, setShowOnboard] = useState(true)

  return (
    <AppearanceProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <OnboardContext.Provider value={{ showOnboard, setShowOnboard }}>
          <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
            <Navigation />
          </NavigationContainer>
        </OnboardContext.Provider>
      </ThemeContext.Provider>
    </AppearanceProvider>
  )
}
