import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NavigationTab from './src/Tabs'
import Onboarding from './src/screens/onboard'

const { Navigator, Screen } = createStackNavigator()

const Navigation = ({ initialScreen, setTheme, theme }) => {
  return (
    <Navigator
      initialRouteName={initialScreen}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home">{(props) => <NavigationTab {...props} setTheme={setTheme} theme={theme} />}</Screen>
      <Screen name="Onboarding" component={Onboarding} />
    </Navigator>
  )
}

export default Navigation
