import { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native'
import { selectHaikuOne } from '~/controller/haikuController'

function Logic(route) {
  const [item, setItem] = useState(null)
  const { colors } = useTheme()
  const loadItem = async () => {
    const haiku = await selectHaikuOne(route.params.itemId)
    if (haiku.status) {
      setItem(haiku.msg[0])
    } else {
      setItem([
        {
          id: 1,
          text: 'Une erreur est survenue, veuillez réessayer',
          date: '',
          author: '',
        },
      ])
    }
  }

  useEffect(() => {
    loadItem()
  }, [])
  return {
    colors,
    item,
  }
}

export default Logic
