import './App.scss'
import * as Realm from 'realm-web'
import { Day } from './features/Day/Day'
import { useEffect } from 'react'

const APP_ID = import.meta.env.VITE_APP_ID
const DATABASE_NAME = import.meta.env.VITE_DATABASE_NAME
const DATABASE_TABLE = import.meta.env.VITE_DATABASE_TABLE
const DATABASE_USERNAME = import.meta.env.VITE_DATABASE_USERNAME
const DATABASE_PASSWORD = import.meta.env.VITE_DATABASE_PASSWORD

let tried = false;

function App() {
  useEffect(() => {
    async function login() {
      if (tried) {
        return
      }

      tried = true
      const app = new Realm.App({ id: APP_ID })

      // Create an email/password credential
      // const credentials = Realm.Credentials.emailPassword(APP_USERNAME, APP_PASSWORD);
      // Authenticate the user
      // const user = await app.logIn(credentials);

      const credentials = Realm.Credentials.anonymous()
      // Authenticate the user
      const user = await app.logIn(credentials)
      console.log(user)

      const mongo = user.mongoClient('mongodb-atlas')
      const collection = mongo.db(DATABASE_NAME).collection(DATABASE_TABLE)
      const days = await collection.find()
      console.log(days)

      return user;
    }

    login()
  }, [])

  return (
    <div className="App">
      <Day />
    </div>
  )
}

export default App
