import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Historypage = () => {
  const { colors } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Test History</Text>
    </View>
  )
}

export default Historypage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
