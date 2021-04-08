import React from 'react'
import { View, StyleSheet } from 'react-native'
import HistoryLogic from './HistoryLogic'
import { useIsFocused } from '@react-navigation/native'

import ListHistory from '~/components/ListHistory'

const Historypage = () => {
  const isFocused = useIsFocused()
  const { colors, heightHeader, items } = HistoryLogic(isFocused)

  return (
    <View style={[styles.container, { marginTop: heightHeader }]}>
      <ListHistory colors={colors} items={items} />
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
