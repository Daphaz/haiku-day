import { openDatabase } from './db'

const sqlite = openDatabase()

export const addHistoryItem = async (item) => {
  const db = await sqlite
  let datas
  return new Promise((res, rej) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT into history(haiku_id,text,date,author) VALUES(?,?,?,?)',
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
            datas = { status: false, msg: error.message, func: 'addHistoryItem' }
            res(datas)
          },
        )
      },
      (err) => {
        datas = { status: false, msg: err.message, func: 'addHistoryItem' }
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
          'DELETE FROM history',
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
