import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const Title = ({ colors, title, left }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text, textAlign: left ? 'left' : 'center' }]}>{title}</Text>
    </View>
  )
}

Title.propTypes = {
  colors: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  left: PropTypes.bool,
}

export default Title

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    marginBottom: 32,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'MerriBold',
    fontSize: 32,
    textAlign: 'center',
    lineHeight: 48,
  },
})
