import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HistoryItem from './HistoryItem'
import Title from './Title'

const ListHistory = ({ colors, items }) => {
  const now = Date.now()

  const navigation = useNavigation()

  const handleClick = (id) => {
    navigation.navigate('Haiku', { itemId: id })
  }

  if (items !== null) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Title colors={colors} title="Automation en cours" />
        <ScrollView>
          {items.map((item) => {
            if (now > item.schedule_date) {
              return (
                <HistoryItem colors={colors} item={item} key={item.id} onClick={() => handleClick(item.haiku_id)} />
              )
            }
          })}
        </ScrollView>
      </View>
    )
  } else {
    return (
      <View style={[styles.container, { backgroundColor: colors.background, justifyContent: 'center' }]}>
        <Text style={[styles.title, { color: colors.text }]}>Vous n&apos;avez pas encore d&apos;Historique</Text>
      </View>
    )
  }
}

ListHistory.propTypes = {
  colors: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'MerriRegular',
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
  },
})

export default ListHistory
