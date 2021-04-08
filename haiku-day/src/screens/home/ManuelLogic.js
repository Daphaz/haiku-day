import { useState, useEffect } from 'react'
import { useTheme } from '@react-navigation/native'
import { useHeaderHeight } from '@react-navigation/stack'
import { selectHaikuAll } from '~/controller/haikuController'
import { images } from '~/data/images'

function ManuelLogic() {
  const [items, setItems] = useState([])
  const [id, setId] = useState(0)
  const [item, setItem] = useState(null)
  const [urlImg, setUrlImg] = useState('')
  const { colors } = useTheme()
  const headerHeight = useHeaderHeight()

  const loadItems = async () => {
    const haikus = await selectHaikuAll()
    if (haikus.status) {
      setItems(haikus.msg)
    } else {
      setItems([
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
    loadItems()
  }, [])

  const displayItem = async () => {
    if (id < items.length) {
      setItem(items[id])
      setId((prev) => prev + 1)
      setUrlImg(images[id].src)
    } else {
      setItem(items[0])
      setId(1)
      setUrlImg(images[0].src)
    }
  }
  return {
    urlImg,
    headerHeight,
    item,
    colors,
    displayItem,
  }
}

export default ManuelLogic
