import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'react-native'
import { prefix } from '~/helpers/constants'

import NavigationHome from '~/screens/home'
import NavigationHistory from '~/screens/history'
import Onboarding from '~/screens/onboard'

const { Navigator, Screen } = createBottomTabNavigator()

const TabsNavigation = ({ setTheme, theme }) => {
  const colors = useColorScheme()
  prefix()
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = focused ? prefix('home') : prefix('home-outline')
              break
            case 'History':
              iconName = focused ? prefix('list') : prefix('list-outline')
              break

            default:
              break
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.border,
        style: { height: 80 },
        labelPosition: 'beside-icon',
      }}
      initialRouteName="Home"
    >
      <Screen name="Home">{(props) => <NavigationHome {...props} setTheme={setTheme} theme={theme} />}</Screen>
      <Screen name="History">{(props) => <NavigationHistory {...props} setTheme={setTheme} theme={theme} />}</Screen>
    </Navigator>
  )
}

export default TabsNavigation
