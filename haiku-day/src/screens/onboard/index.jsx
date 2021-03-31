import React, { useContext } from 'react'
import { Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import { useTheme } from '@react-navigation/native'
import { OnboardContext } from '../../helpers/context'
import notif from '~/assets/images/notif-onboard.png'
import programer from '~/assets/images/schedule-onboard.png'
import positive from '~/assets/images/positive-onboard.png'

const Onboard = () => {
  const { setShowOnboard } = useContext(OnboardContext)
  const { colors } = useTheme()
  const handleClick = () => {
    setShowOnboard(false)
  }
  return (
    <Onboarding
      onSkip={handleClick}
      skipLabel="Passer"
      nextLabel="Suivant"
      onDone={handleClick}
      pages={[
        {
          backgroundColor: colors.background,
          image: <Image source={programer} />,
          title: 'Programmer',
          subtitle: 'Choissez votre moment pour recevoir un Haiku',
        },
        {
          backgroundColor: colors.background,
          image: <Image source={notif} />,
          title: 'Notifier',
          subtitle: 'Vous serez averti par une notification',
        },
        {
          backgroundColor: colors.background,
          image: <Image source={positive} />,
          title: 'Positive',
          subtitle: 'Passer une journée dans la bonne humeur !',
        },
      ]}
    />
  )
}

export default Onboard
