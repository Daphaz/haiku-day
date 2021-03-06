import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import Logic from './Logic'
import { images } from '~/data/images'

import Btn from '~/components/Btn'

const { width } = Dimensions.get('window')

const Haiku = ({ route, navigation }) => {
  const { colors, item } = Logic(route)

  return (
    <>
      {item !== null && (
        <ImageBackground source={images[route.params.itemId - 1].src} style={styles.image}>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.haikuText}>{item.text}</Text>
              <View style={styles.infos}>
                <View style={styles.bgInfos}>
                  <Text style={styles.haikuDate}>{item.date}</Text>
                  <Text style={styles.haikuAuthor}>{item.author}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Btn primary colors={colors} text="retour" nomargin onClick={() => navigation.navigate('Home')} />
          </View>
        </ImageBackground>
      )}
    </>
  )
}

Haiku.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default Haiku

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: width - 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  haikuText: {
    width: '100%',
    fontFamily: 'MerriRegular',
    fontSize: 28,
    marginBottom: 42,
    lineHeight: 42,
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
  footer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 32,
  },
})
