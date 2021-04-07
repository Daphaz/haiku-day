import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet, Linking } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import * as Font from 'expo-font'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'
import { DefaultTheme, DarkTheme } from './src/theme'
import Navigation from './Navigation'
import { renderInitialScreen, renderTheme } from './src/helpers/constants'

const prefix = 'exp://192.168.0.36:19000/--'

export default function App() {
  const colorScheme = useColorScheme()
  const [loading, setLoading] = useState(true)
  const [initialScreen, setInitialScreen] = useState('Login')
  const [theme, setTheme] = useState()
  const lastNotificationResponse = Notifications.useLastNotificationResponse()

  const loadItems = async () => {
    try {
      const result = await new Promise.all([
        Font.loadAsync({
          MerriBold: require('./src/assets/fonts/Merriweather-Bold.ttf'),
          MerriRegular: require('./src/assets/fonts/Merriweather-Regular.ttf'),
          MerriLight: require('./src/assets/fonts/Merriweather-Light.ttf'),
        }),
        renderInitialScreen(),
        renderTheme(colorScheme),
        Permissions.askAsync(Permissions.NOTIFICATIONS),
      ])
      const route = result[1]
      const colorTheme = result[2]
      const status = result[3].status
      if (route && colorTheme && status === 'granted') {
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
    loadItems()
  }, [])

  useEffect(() => {
    if (
      lastNotificationResponse &&
      lastNotificationResponse.notification.request.content.data.url &&
      lastNotificationResponse.actionIdentifier === Notifications.DEFAULT_ACTION_IDENTIFIER
    ) {
      Linking.openURL(lastNotificationResponse.notification.request.content.data.url)
    }
  }, [lastNotificationResponse])

  const linking = {
    prefixes: [prefix],
    config: {
      Home: 'home',
      Haiku: {
        path: 'haiku/:itemId',
        params: {
          itemId: null,
        },
      },
    },
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  } else {
    return (
      <AppearanceProvider>
        <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme} linking={linking}>
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
