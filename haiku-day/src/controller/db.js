import * as SQLite from 'expo-sqlite'
import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'

export async function openDatabase() {
  const internalDbName = 'haiku.db'
  const sqlDir = FileSystem.documentDirectory + 'SQLite/'
  if (!(await FileSystem.getInfoAsync(sqlDir + internalDbName)).exists) {
    await FileSystem.makeDirectoryAsync(sqlDir, { intermediates: true })
    const asset = Asset.fromModule(require('../assets/database/haiku-db.db'))
    await FileSystem.downloadAsync(asset.uri, sqlDir + internalDbName)
  }
  return SQLite.openDatabase(internalDbName)
}
