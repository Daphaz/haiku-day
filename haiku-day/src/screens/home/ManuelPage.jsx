import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useHeaderHeight } from '@react-navigation/stack'
import { selectHaikuAll } from '../../controller/haikuController'

import Btn from '~/components/Btn'
import Title from '~/components/Title'

const { width, height } = Dimensions.get('window')

const HEIGHT_FOOTER = height * 0.161

const ManuelPage = () => {
  const [id, setId] = useState(0)
  const [item, setItem] = useState(null)
  const { colors } = useTheme()
  const headerHeight = useHeaderHeight()

  const displayItem = async () => {
    const items = await selectHaikuAll()
    if (id < items.length) {
      setItem(items[id])
      setId((prev) => prev + 1)
    } else {
      setItem(items[0])
      setId(1)
    }
  }

  return (
    <View style={[styles.container, { paddingTop: headerHeight }]}>
      <View style={styles.block}>
        {item !== null ? (
          <View style={styles.content}>
            <Text style={styles.haikuText}>{item.text}</Text>
            <View style={styles.infos}>
              <Text style={styles.haikuDate}>{item.date}</Text>
              <Text style={styles.haikuAuthor}>{item.author}</Text>
            </View>
          </View>
        ) : (
          <Title colors={colors} title="Cliquez pour voir un Haiku" />
        )}
      </View>
      <View style={styles.footer}>
        <Btn colors={colors} text="lancer" nomargin onClick={displayItem} />
      </View>
    </View>
  )
}

export default ManuelPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  block: {
    flex: 1,
    width: width - 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: width - 32,
    height: HEIGHT_FOOTER,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  haikuText: {
    width: '100%',
    fontFamily: 'MerriRegular',
    fontSize: 24,
    marginBottom: 36,
    lineHeight: 36,
  },
  infos: {
    width: '100%',
    alignItems: 'flex-end',
  },
  haikuDate: {
    fontFamily: 'MerriBold',
    fontSize: 14,
    marginBottom: 8,
  },
  haikuAuthor: {
    fontFamily: 'MerriLight',
    fontSize: 16,
  },
})
