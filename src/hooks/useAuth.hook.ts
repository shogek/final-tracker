import { useEffect, useState } from 'react'
import authService from '../services/auth-service/auth.service'
import { IUser } from '../types/User.type'
import { IError } from '../types/Error.type'

interface UseAuthState {
   user: IUser | null
   error: IError | null
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
         setState({
            user: null,
            error: null,
            isLoading: true,
         })

         const {
            user,
            error,
         } = await authService.getUser()

         if (error || !user) {
            setState({
               user: null,
               error: error || 'Failed to retrieve the user!',
               isLoading: false,
            })
            return
         }

         setState({
            user,
            error: null,
            isLoading: false,
         })
      }

      signIn();
   }, []);

   return {
      user: state.user,
      error: state.error,
      isLoading: state.isLoading,
   }
}