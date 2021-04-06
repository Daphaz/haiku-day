import * as Notifications from 'expo-notifications'
import { selectHaikuAll, updateHaikuSchedule } from '../controller/haikuController'
import { addHistoryItem } from '../controller/historyController'

export const scheduleNotification = async (date) => {
  const hours = date.getHours()
  const minute = date.getMinutes()

  console.log(hours, minute)

  // await Notifications.scheduleNotificationAsync({
  //   content: {
  //     title: 'Vous avez un nouveau haiku 📬',
  //     body: '',
  //   },
  //   trigger: {
  //     hour: hours,
  //     minute: minute,
  //     repeats: true,
  //   },
  // })
}
