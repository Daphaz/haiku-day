import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Homepage from './HomePage'
import { HeaderLeft, HeaderRight } from '~/components/header'

const { Navigator, Screen } = createStackNavigator()

const Home = () => {
  return (
    <Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Screen name="HomePage" component={Homepage} />
    </Navigator>
  )
}

export default Home
