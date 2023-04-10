import React from 'react'
import useAuth from '../../hooks/useAuth.hook'

export default function AuthenticationModule({ children }: React.PropsWithChildren): JSX.Element {
   const { user, error } = useAuth()
   
   if (error) {
      return (
         <div>
            <h1>Error while trying to sign in!</h1>
            <p>{error}</p>
         </div>
      )
   }

   if (!user) {
      return (
         <div>
            <h1>Signing in...</h1>
            <p>Please wait while we authenticate you.</p>
         </div>
      )
   }

   return (
      <>
         {children}
      </>
   )
}
