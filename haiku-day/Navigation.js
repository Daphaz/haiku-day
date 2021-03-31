import React, { useContext } from 'react'
import TabsNavigation from './src/Tabs'
import Onboard from './src/screens/onboard'
import { OnboardContext } from './src/helpers/context'

const Navigation = () => {
  const { showOnboard } = useContext(OnboardContext)
  return showOnboard ? <Onboard /> : <TabsNavigation />
}

export default Navigation
