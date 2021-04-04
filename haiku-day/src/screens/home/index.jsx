import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'
import Homepage from './HomePage'
import AutoPage from './AutoPage'
import ManuelPage from './ManuelPage'
import { HeaderLeft, HeaderRight } from '~/components/header'

const { Navigator, Screen } = createStackNavigator()

const Home = ({ setTheme, theme }) => {
  return (
    <Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: <HeaderLeft />,
        headerRight: <HeaderRight setTheme={setTheme} theme={theme} />,
      }}
    >
      <Screen name="HomePage" component={Homepage} />
      <Screen name="AutoPage" component={AutoPage} />
      <Screen name="ManuelPage" component={ManuelPage} />
    </Navigator>
  )
}

Home.propTypes = {
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default Home
