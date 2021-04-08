import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme, useIsFocused } from '@react-navigation/native'
import { useHeaderHeight } from '@react-navigation/stack'
import { selectHistoryAll } from '../../controller/historyController'

import ListHistory from '../../components/ListHistory'

const Historypage = () => {
  const { colors } = useTheme()
  const heightHeader = useHeaderHeight()
  const [items, setItems] = useState(null)
  const isFocused = useIsFocused()

  const loadItem = async () => {
    try {
      const history = await selectHistoryAll()
      if (history.status) {
        setItems(history.msg)
      } else {
        setItems(null)
      }
    } catch (err) {
      setItems(null)
    }
  }

  useEffect(() => {
    loadItem()
  }, [isFocused])

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
