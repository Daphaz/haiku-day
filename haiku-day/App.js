import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import * as Font from 'expo-font'
import { DefaultTheme, DarkTheme } from './src/theme'
import Navigation from './Navigation'
import { renderInitialScreen, renderTheme } from './src/helpers/constants'

export default function App() {
  const colorScheme = useColorScheme()
  const [loading, setLoading] = useState(true)
  const [initialScreen, setInitialScreen] = useState('Login')
  const [theme, setTheme] = useState()

  const loadFont = async () => {
    try {
      const result = await new Promise.all([
        Font.loadAsync({
          MerriBold: require('./src/assets/fonts/Merriweather-Bold.ttf'),
          MerriRegular: require('./src/assets/fonts/Merriweather-Regular.ttf'),
          MerriLight: require('./src/assets/fonts/Merriweather-Light.ttf'),
        }),
        renderInitialScreen(),
        renderTheme(colorScheme),
      ])
      const route = result[1]
      const colorTheme = result[2]
      if (route && colorTheme) {
        setInitialScreen(route)
        setTheme(colorTheme)
        setLoading(false)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  useEffect(() => {
    loadFont()
  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  } else {
    return (
      <AppearanceProvider>
        <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
          <Navigation initialScreen={initialScreen} setTheme={setTheme} theme={theme} />
        </NavigationContainer>
      </AppearanceProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
