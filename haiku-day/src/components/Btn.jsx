import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const Btn = ({ colors, primary, text, onClick, nomargin }) => {
  if (primary) {
    return (
      <TouchableOpacity onPressOut={onClick}>
        <View style={[styles.container, { backgroundColor: colors.primary, marginBottom: nomargin ? 0 : 16 }]}>
          <Text style={[styles.title, styles.primary]}>{text}</Text>
        </View>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity onPressOut={onClick}>
        <View style={[styles.container, styles.secondary, { borderColor: colors.primary }]}>
          <Text style={[styles.title, { color: colors.text }]}>{text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Btn

const styles = StyleSheet.create({
  container: {
    width: width - 64,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'MerriRegular',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  primary: {
    color: '#fff',
  },
  secondary: {
    borderWidth: 2,
  },
})
