import { useEffect, useState } from 'react'
import * as Realm from 'realm-web'
import { ENVIRONMENT } from '../configuration/environment.config'

interface UseAuthState {
   user: any | null
   error: string | null
   isLoading: boolean
}

type IUseAuth = UseAuthState

export default function useAuth(): IUseAuth {
   const [state, setState] = useState<UseAuthState>({
      user: null,
      error: null,
      isLoading: false,
   })

   useEffect(() => {
      async function signIn() {
         // TODO: Switch to email/password credentials
         // const credentials = Realm.Credentials.emailPassword(APP_USERNAME, APP_PASSWORD);

         setState({
            user: null,
            error: null,
            isLoading: true,
         })

         try {
            const app = new Realm.App({ id: ENVIRONMENT.appId })
            const credentials = Realm.Credentials.anonymous()
            const user = await app.logIn(credentials)

            setState({
               user,
               error: null,
               isLoading: false,
            })
         } catch (e: any) {
            setState({
               user: null,
               error: e.toString(),
               isLoading: false,
            })
         }
      }

      signIn();
   }, []);

   return {
      user: state.user,
      error: state.error,
      isLoading: state.isLoading,
   }
}