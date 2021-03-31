import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const HomePage = () => {
  const { colors } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Test Home</Text>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})