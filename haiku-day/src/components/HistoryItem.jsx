import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { timeFormatHistory } from '../helpers/dateFormated'

const { width } = Dimensions.get('window')

const HistoryItem = ({ colors, item, onClick }) => {
  return (
    <TouchableOpacity onPressOut={onClick}>
      <View style={[styles.container, { backgroundColor: colors.card }]}>
        <View style={styles.content}>
          <View style={{ width: '70%' }}>
            <Text style={[styles.text, { color: colors.text }]}>{item.text}</Text>
          </View>
          <View style={{ width: '30%' }}>
            <Text style={[styles.textInfo, { color: colors.text, marginBottom: 8 }]}>{item.date}</Text>
            <Text style={[styles.textInfo, { color: colors.text }]}>{item.author}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={[styles.date, { color: colors.text }]}>{timeFormatHistory(item.schedule_date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

HistoryItem.propTypes = {
  colors: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default HistoryItem

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    borderRadius: 16,
    marginBottom: 16,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 8,
  },
  text: {
    fontFamily: 'MerriBold',
    fontSize: 14,
    lineHeight: 21,
    paddingRight: 8,
  },
  textInfo: {
    fontFamily: 'MerriRegular',
    fontSize: 12,
    lineHeight: 12,
    textAlign: 'right',
  },
  date: {
    fontFamily: 'MerriLight',
    fontSize: 12,
    lineHeight: 12,
    textAlign: 'right',
  },
})
