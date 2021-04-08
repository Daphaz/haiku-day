import dateFormat from 'dateformat'

dateFormat.i18n = {
  dayNames: [
    'Dim',
    'Lun',
    'Mar',
    'Mer',
    'Jeu',
    'Ven',
    'Sam',
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  monthNames: [
    'Jan',
    'Feb',
    'Mar',
    'Avr',
    'Mai',
    'Jui',
    'Juil',
    'Aou',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre',
  ],
  timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
}

export const timeFormat = (date) => {
  dateFormat.masks.timeAuto = '"Tous les jours à" HH:MM'
  return dateFormat(date, 'timeAuto')
}

export const timeFormatHistory = (date) => {
  dateFormat.masks.timeHisto = '"recu le" dd mmmm HH:MM'
  return dateFormat(date, 'timeHisto')
}
