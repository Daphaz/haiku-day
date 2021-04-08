import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Switch, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { prefix } from '~/helpers/constants'
import Logic from './Logic'
import Logo from '~/assets/images/logo.png'

export const HeaderLeft = () => {
  return (
    <View style={styles.headerLeft}>
      <Image source={Logo} width="100%" height="100%" />
    </View>
  )
}

export const HeaderRight = ({ setTheme, theme }) => {
  const { colors, isEnabled, toggleSwitch } = Logic(setTheme, theme)
  return (
    <View style={[styles.headerRight]}>
      <Ionicons color={colors.text} name={prefix('sunny')} style={styles.iconRight} size={16} />
      <Switch
        trackColor={colors.card}
        thumbColor={colors.primary}
        ios_backgroundColor={colors.border}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}
HeaderRight.propTypes = {
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 16,
    fontWeight: '500',
    fontSize: 16,
  },
  headerRight: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconRight: {
    marginRight: 8,
  },
})
