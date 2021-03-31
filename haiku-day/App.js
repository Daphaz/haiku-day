import React, { useState } from 'react'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, DarkTheme } from './src/theme'
import { ThemeContext } from './src/helpers/context'
import TabsNavigation from './src/Tabs'

export default function App() {
  const colorScheme = useColorScheme()
  const [theme, setTheme] = useState(colorScheme)

  return (
    <AppearanceProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
          <TabsNavigation />
        </NavigationContainer>
      </ThemeContext.Provider>
    </AppearanceProvider>
  )
}
