import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { prefix } from '~/helpers/constants'
import Logic from './Logic'

export const HeaderLeft = () => {
  const { colors } = Logic()
  return (
    <View style={styles.headerLeft}>
      <Text style={{ color: colors.text }}>Logo</Text>
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
