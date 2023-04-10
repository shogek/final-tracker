import { useEffect, useState } from 'react';
import { ENVIRONMENT } from '../configuration/environment.config';
import useAuth from './useAuth.hook';
import { IDay } from '../models/Day.model';

interface UseDaysState {
   days: IDay[]
   error: string | null
   isLoading: boolean
}

type IUseDays = UseDaysState

export default function useDays(): IUseDays {
   const { user } = useAuth()
   const [state, setState] = useState<UseDaysState>({
      days: [],
      error: null,
      isLoading: true,
   })

   useEffect(() => {
      if (!user) {
         return
      }

      async function getAllDays() {
         setState({
            days: [],
            error: null,
            isLoading: true,
         })

         try {
            const mongo = user.mongoClient('mongodb-atlas')
            const collection = mongo.db(ENVIRONMENT.databaseName).collection(ENVIRONMENT.databaseTable)
            const days = await collection.find()

            setState({
               // TODO: Use "Mongoose" for mapping?
               days,
               error: null,
               isLoading: false,
            })
         } catch (e: any) {
            setState({
               days: [],
               error: e.toString(),
               isLoading: false,
            })
         }
      }

      getAllDays()
   }, [user])

   return {
      days: state.days,
      error: state.error,
      isLoading: state.isLoading
   }
}