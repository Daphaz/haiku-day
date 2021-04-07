import { openDatabase } from './db'

const sqlite = openDatabase()

export const selectHaikuOne = async (id) => {
  const db = await sqlite
  let datas
  return new Promise((res, rej) => {
    db.transaction(
      (tx) => {
        tx.executeSql('SELECT * from haiku WHERE id=?', [id], (tx, result) => {
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

export const updateHaikuSchedule = async (id, schedule, schedule_date) => {
  const db = await sqlite
  let datas
  return new Promise((res, rej) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'UPDATE haiku SET schedule=?,schedule_date=? WHERE id=?',
          [schedule, schedule_date, id],
          (tx, result) => {
            if (result.rowsAffected > 0) {
              datas = { status: true, msg: 'sucess update' }
            } else {
              datas = { status: false, msg: 'Un probleme est survenue, veuillez réessayer' }
            }
            res(datas)
          },
        )
      },
      (err) => {
        datas = { status: false, msg: err, func: 'updateHaikuSchedule' }
        rej(datas)
      },
    )
  })
}

export const updateHaikuScheduleAll = async () => {
  const db = await sqlite
  let datas
  return new Promise((res, rej) => {
    db.transaction(
      (tx) => {
        tx.executeSql('UPDATE haiku SET schedule=?,schedule_date=?', ['disable', null], (tx, result) => {
          if (result.rowsAffected > 0) {
            datas = { status: true, msg: 'sucess update' }
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
