import { useState, useEffect } from 'react'
import { useTheme } from '@react-navigation/native'
import { getMode, removeMode } from '~/helpers/constants'
import { removeNotificationAndActive } from '~/helpers/notifications'

function HomeLogic(navigation, route) {
  const { colors } = useTheme()
  const [mode, setMode] = useState({ mode: false, date: '' })

  const loadMode = async () => {
    try {
      const item = await getMode()
      setMode(item)
    } catch (e) {
      setMode(false)
    }
  }

  useEffect(() => {
    loadMode()
  }, [route.params])

  const handleClickAuto = () => {
    navigation.navigate('AutoPage')
  }

  const handleClickManuel = () => {
    navigation.navigate('ManuelPage')
  }

  const handleRemove = async () => {
    await removeNotificationAndActive()
    removeMode()
    setMode({ mode: false, date: '' })
  }
  return {
    colors,
    mode,
    handleClickAuto,
    handleClickManuel,
    handleRemove,
  }
}

export default HomeLogic
