import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const prefix = (iconName) => {
  const { platform } = Constants
  if (platform.android) {
    return `md-${iconName}`
  } else if (platform.ios) {
    return `ios-${iconName}`
  }
  return iconName
}

export const finishOnboard = async () => {
  await AsyncStorage.setItem('onBoard', 'true')
}

export const renderInitialScreen = async () => {
  try {
    const onBoard = await AsyncStorage.getItem('onBoard')
    return onBoard ? 'Home' : 'Onboarding'
  } catch (e) {
    console.error('erreur initial screen', e)
  }
}

export const setThemeLocal = async (color) => {
  await AsyncStorage.setItem('theme', color)
}

export const renderTheme = async (colorScheme) => {
  try {
    const theme = await AsyncStorage.getItem('theme')
    return theme ? theme : colorScheme
  } catch (e) {
    console.error('erreur render Theme', e)
  }
}
