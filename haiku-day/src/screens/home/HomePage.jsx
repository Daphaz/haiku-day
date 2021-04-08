import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { timeFormat } from '~/helpers/dateFormated'
import HomeLogic from './HomeLogic'

import Title from '~/components/Title'
import Btn from '~/components/Btn'

const { width } = Dimensions.get('window')

const HomePage = ({ navigation, route }) => {
  const { colors, handleClickAuto, handleClickManuel, handleRemove, mode } = HomeLogic(navigation, route)

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {!mode.mode ? (
        <>
          <Title colors={colors} title="Veuillez choisir un mode" />
          <Btn colors={colors} text="automatique" primary onClick={handleClickAuto} />
          <Btn colors={colors} text="manuel" onClick={handleClickManuel} />
        </>
      ) : (
        <>
          <Title colors={colors} title="Mode automatique activé" left />
          <Text style={[styles.text, { color: colors.text }]}>
            Vous receverez un nouveau Haiku {timeFormat(mode.date)}
          </Text>
          <Btn colors={colors} text="desactiver" onClick={handleRemove} />
        </>
      )}
    </View>
  )
}
HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: width - 32,
    fontFamily: 'MerriRegular',
    fontSize: 20,
    lineHeight: 32,
    marginBottom: 32,
  },
})
