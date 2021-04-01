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
            datas = result.rows._array
          } else {
            datas = 'Aucun haiku trouvé'
          }
          res(datas)
        })
      },
      (err) => {
        datas = err.message
        rej(datas)
      },
    )
  })
}
