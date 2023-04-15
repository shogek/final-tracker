import * as Realm from 'realm-web'
import { ENVIRONMENT } from '../../configuration/environment.config'
import { IError } from '../../types/Error.type'
import { IUser } from '../../types/User.type'
import { IGetUser } from './auth.types'

interface IAuthService {
   getUser(): Promise<IGetUser>
}

class AuthService implements IAuthService {
   private _user: IUser | null = null
   private _error: IError | null = null

   async getUser(): Promise<IGetUser> {
      if (this._user) {
         return { user: this._user }
      }

      try {
         // TODO: Switch to email/password credentials
         // const credentials = Realm.Credentials.emailPassword(APP_USERNAME, APP_PASSWORD);
         const app = new Realm.App({ id: ENVIRONMENT.appId })
         const credentials = Realm.Credentials.anonymous()
         const user = await app.logIn(credentials)

         this._user = user
         this._error = null

         return { user }
      } catch (e: any) {
         const error = e.toString()

         this._error = error
         this._user = null

         return { error }
      }
   }
}

const authService = new AuthService()

export default authService