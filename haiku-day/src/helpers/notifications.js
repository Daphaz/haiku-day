import * as Notifications from 'expo-notifications'
import { selectHaikuAll, updateHaikuSchedule, updateHaikuScheduleAll } from '../controller/haikuController'
import { addHistoryItem, removeHistoryItem } from '../controller/historyController'

export const scheduleNotification = async (date) => {
  const haikus = await selectHaikuAll()
  if (haikus.status) {
    let currentDate = Date.parse(date)
    const now = Date.now()
    const items = haikus.msg

    await Notifications.setNotificationChannelAsync('new-haiku', {
      name: 'Haiku notifications',
      importance: Notifications.AndroidImportance.HIGH,
    })

    if (currentDate > now) {
      for (let haiku of items) {
        const { id, text, date: dataH, author } = haiku
        const uptHaiku = await updateHaikuSchedule(id, 'active', currentDate)
        if (uptHaiku.status) {
          const item = [id, text, dataH, author, currentDate]
          const addHistory = await addHistoryItem(item)
          if (addHistory.status) {
            const url = `haikuday://haiku/${id}`
            await Notifications.scheduleNotificationAsync({
              content: {
                title: 'Vous avez recu un nouveaux Haiku !',
                body: text,
                data: {
                  url,
                },
              },
              trigger: {
                date: currentDate,
                channelId: 'new-haiku',
              },
            })
            currentDate = currentDate + 60 * 60 * 24 * 1000
          }
        }
      }
    } else {
      let currentDate = Date.parse(date) + 60 * 60 * 24 * 1000
      for (let haiku of items) {
        const { id, text, date: dataH, author } = haiku
        const uptHaiku = await updateHaikuSchedule(id, 'active', currentDate)
        if (uptHaiku.status) {
          const item = [id, text, dataH, author, currentDate]
          const addHistory = await addHistoryItem(item)
          if (addHistory.status) {
            const url = `haikuday://haiku/${id}`
            await Notifications.scheduleNotificationAsync({
              content: {
                title: 'Vous avez recu un nouveaux Haiku !',
                body: text,
                data: {
                  url,
                },
              },
              trigger: {
                date: currentDate,
                channelId: 'new-haiku',
              },
            })
            currentDate = currentDate + 60 * 60 * 24 * 1000
          }
        }
      }
    }
  }
}

export const removeNotificationAndActive = async () => {
  const removeItem = await removeHistoryItem()
  if (removeItem.status) {
    const result = await updateHaikuScheduleAll()
    if (result.status) {
      await Notifications.cancelAllScheduledNotificationsAsync()
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
