import { useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { saveAutoMode } from '~/helpers/constants'
import { scheduleNotification } from '~/helpers/notifications'

function AutoLogic(navigation) {
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
    scheduleNotification(date)
    navigation.navigate('HomePage', true)
  }
  return {
    colors,
    handleShowTimePiker,
    show,
    date,
    onChange,
    onSubmit,
  }
}

export default AutoLogic
