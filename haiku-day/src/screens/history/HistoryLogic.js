import { useState, useEffect } from 'react'
import { useTheme } from '@react-navigation/native'
import { useHeaderHeight } from '@react-navigation/stack'
import { selectHistoryAll } from '~/controller/historyController'

function HistoryLogic(isFocused) {
  const { colors } = useTheme()
  const heightHeader = useHeaderHeight()
  const [items, setItems] = useState(null)

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
  return {
    colors,
    heightHeader,
    items,
  }
}

export default HistoryLogic
