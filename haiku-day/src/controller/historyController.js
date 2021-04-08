import { openDatabase } from './db'

const sqlite = openDatabase()

export const selectHistoryAll = async () => {
  const db = await sqlite
  let datas
  return new Promise((res, rej) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT * from history',
          null,
          (tx, result) => {
            if (result.rows.length > 0) {
              datas = { status: true, msg: result.rows._array }
            } else {
              datas = { status: false, msg: 'Une heure est survenue, veuillez recommencer' }
            }
            res(datas)
          },
          (error) => {
            datas = { status: false, msg: error.message, func: 'selectHistoryAll' }
            res(datas)
          },
        )
      },
      (err) => {
        datas = { status: false, msg: err.message, func: 'selectHistoryAll' }
        rej(datas)
      },
    )
  })
}

export const addHistoryItem = async (item) => {
  const db = await sqlite
  let datas
  return new Promise((res, rej) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT into history(haiku_id,text,date,author,schedule_date) VALUES(?,?,?,?,?)',
          item,
          (tx, result) => {
            if (result.rowsAffected > 0) {
              datas = { status: true, msg: 'Haiku Programmé !' }
            } else {
              datas = { status: false, msg: 'Une heure est survenue, veuillez recommencer' }
            }
            res(datas)
          },
          (error) => {
            datas = { status: false, msg: error, func: 'addHistoryItemError' }
            res(datas)
          },
        )
      },
      (err) => {
        datas = { status: false, msg: err, func: 'addHistoryItem' }
        rej(datas)
      },
    )
  })
}

export const removeHistoryItem = async () => {
  const db = await sqlite
  let datas
  return new Promise((res, rej) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'DELETE from history',
          null,
          (tx, result) => {
            if (result.rowsAffected > 0) {
              datas = { status: true, msg: 'Haiku Programmé supprimer !' }
            } else {
              datas = { status: false, msg: 'Une heure est survenue, veuillez recommencer' }
            }
            res(datas)
          },
          (error) => {
            datas = { status: false, msg: error.message }
            res(datas)
          },
        )
      },
      (err) => {
        datas = { status: false, msg: err.message }
        rej(datas)
      },
    )
  })
}
