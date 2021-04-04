import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { prefix } from '~/helpers/constants'

const { height } = Dimensions.get('window')

const ReturnBtn = ({ colors, onClick }) => {
  return (
    <TouchableOpacity style={[styles.container, { borderColor: colors.text }]} onPressOut={onClick}>
      <Ionicons name={prefix('arrow-back')} color={colors.text} size={18} />
    </TouchableOpacity>
  )
}
ReturnBtn.propTypes = {
  colors: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ReturnBtn

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: height * 0.12,
    left: 16,
  },
})
