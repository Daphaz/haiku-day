import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HistoryPage from './HistoryPage'
import { HeaderLeft, HeaderRight } from '~/components/header'

const { Navigator, Screen } = createStackNavigator()

const History = ({ setTheme, theme }) => {
  return (
    <Navigator
      initialRouteName="HistoryPage"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight setTheme={setTheme} theme={theme} />,
      }}
    >
      <Screen name="HistoryPage" component={HistoryPage} />
    </Navigator>
  )
}

export default History
