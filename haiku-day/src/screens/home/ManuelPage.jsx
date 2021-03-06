import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import ManuelLogic from './ManuelLogic'

import Btn from '~/components/Btn'
import Title from '~/components/Title'

const { width, height } = Dimensions.get('window')

const HEIGHT_FOOTER = height * 0.161

const ManuelPage = () => {
  const { colors, displayItem, headerHeight, item, urlImg } = ManuelLogic()

  return (
    <ImageBackground source={urlImg} style={[styles.image, { marginTop: headerHeight }]}>
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <View style={styles.block}>
          {item !== null ? (
            <View style={styles.content}>
              <Text style={styles.haikuText}>{item.text}</Text>
              <View style={styles.infos}>
                <View style={styles.bgInfos}>
                  <Text style={styles.haikuDate}>{item.date}</Text>
                  <Text style={styles.haikuAuthor}>{item.author}</Text>
                </View>
              </View>
            </View>
          ) : (
            <Title colors={colors} title="Cliquez pour voir un Haiku" />
          )}
        </View>
        <View style={styles.footer}>
          <Btn primary colors={colors} text="lancer" nomargin onClick={displayItem} />
        </View>
      </View>
    </ImageBackground>
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
    fontSize: 22,
    marginBottom: 33,
    lineHeight: 33,
    padding: 4,
    borderRadius: 8,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  infos: {
    width: '100%',
    alignItems: 'flex-end',
  },
  haikuDate: {
    color: '#fff',
    fontFamily: 'MerriBold',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'right',
  },
  haikuAuthor: {
    color: '#fff',
    fontFamily: 'MerriLight',
    fontSize: 16,
    textAlign: 'right',
  },
  bgInfos: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})
