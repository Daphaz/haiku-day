import dateFormat from 'dateformat'

export const timeFormat = (date) => {
  dateFormat.masks.timeAuto = '"Tous les jours à" HH:MM'
  return dateFormat(date, 'timeAuto')
}
