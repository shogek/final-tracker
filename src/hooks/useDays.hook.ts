import { useEffect, useState } from 'react';
import { IDay } from '../models/Day.model';
import dayService from '../services/day-service/day.service';

interface UseDaysState {
   days: IDay[]
   error: string | null
   isLoading: boolean
}

type IUseDays = UseDaysState

export default function useDays(): IUseDays {
   const [state, setState] = useState<UseDaysState>({
      days: [],
      error: null,
      isLoading: true,
   })

   useEffect(() => {
      async function getAllDays() {
         setState({
            days: [],
            error: null,
            isLoading: true,
         })

         const {
            days,
            error,
         } = await dayService.getAllDays()

         if (error || !days) {
            setState({
               days: [],
               error: error || 'Failed to retrieve the days!',
               isLoading: false,
            })
            return
         }

         setState({
            days: days.sort((a, b) => b.date.getTime() - a.date.getTime()),
            error: null,
            isLoading: false,
         })
      }

      getAllDays()
   }, [])

   return {
      days: state.days,
      error: state.error,
      isLoading: state.isLoading
   }
}