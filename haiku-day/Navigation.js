import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'
import NavigationTab from './src/Tabs'
import Onboarding from './src/screens/onboard'
import Haiku from './src/screens/haiku'

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
      <Screen name="Haiku" component={Haiku} />
    </Navigator>
  )
}

Navigation.propTypes = {
  initialScreen: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
}

export default Navigation
