import Constants from 'expo-constants'

export const prefix = (iconName) => {
  const { platform } = Constants
  if (platform.android) {
    return `md-${iconName}`
  } else if (platform.ios) {
    return `ios-${iconName}`
  }
  return iconName
}
