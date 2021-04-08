import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { timeFormat } from '~/helpers/dateFormated'
import AutoLogic from './AutoLogic'

import ReturnBtn from '~/components/ReturnBtn'
import Btn from '~/components/Btn'
import Title from '~/components/Title'

const AutoPage = ({ navigation }) => {
  const { colors, date, handleShowTimePiker, onChange, onSubmit, show } = AutoLogic(navigation)

  return (
    <View style={styles.container}>
      <ReturnBtn colors={colors} onClick={() => navigation.goBack()} />
      <Title colors={colors} title="Choisissez une heure" />
      <Btn colors={colors} text="Choisir une heure" onClick={handleShowTimePiker} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={[styles.text, { color: colors.text }]}>{timeFormat(date)}</Text>
      <Btn primary colors={colors} text="activer" onClick={onSubmit} />
    </View>
  )
}
AutoPage.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default AutoPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 16,
    marginBottom: 32,
    fontFamily: 'MerriRegular',
    fontSize: 20,
  },
})
