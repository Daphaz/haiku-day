import { openDatabase } from './db'

const sqlite = openDatabase()

export const selectHaikuAll = async () => {
  const db = await sqlite
  let datas
  return new Promise((res, rej) => {
    db.transaction(
      (tx) => {
        tx.executeSql('SELECT * from haiku', null, (tx, result) => {
          if (result.rows.length > 0) {
            datas = { status: true, msg: result.rows._array }
          } else {
            datas = { status: false, msg: 'Aucun haiku trouvé' }
          }
          res(datas)
        })
      },
      (err) => {
        datas = { status: false, msg: err.message }
        rej(datas)
      },
    )
  })
}

export const updateHaikuSchedule = async (id, schedule) => {
  const db = await sqlite
  let datas
  return new Promise((res, rej) => {
    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE haiku SET schedule=? WHERE id=?', [schedule, id], (tx, result) => {
          if (result.rows.length > 0) {
            datas = { status: true, msg: 'Haiku schedule update' }
          } else {
            datas = { status: false, msg: 'Un probleme est survenue, veuillez réessayer' }
          }
          res(datas)
        })
      },
      (err) => {
        datas = { status: false, msg: err.message }
        rej(datas)
      },
    )
  })
}
