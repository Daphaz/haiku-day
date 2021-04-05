import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { timeFormat } from '~/helpers/dateFormated'
import { saveAutoMode } from '../../helpers/constants'

import ReturnBtn from '~/components/ReturnBtn'
import Btn from '../../components/Btn'
import Title from '../../components/Title'

const AutoPage = ({ navigation }) => {
  const { colors } = useTheme()
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())

  const onChange = (event, selectedDate) => {
    setShow(false)
    const currentDate = selectedDate || date
    setDate(currentDate)
  }

  const handleShowTimePiker = () => {
    setShow(true)
  }

  const onSubmit = () => {
    saveAutoMode(Date.parse(date).toString())
    navigation.navigate('HomePage', true)
  }

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
