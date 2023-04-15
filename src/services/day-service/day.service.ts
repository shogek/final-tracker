import { ENVIRONMENT } from '../../configuration/environment.config'
import { IDay } from '../../models/Day.model'
import authService from '../auth-service/auth.service'
import { IGetAllDays } from './day.types'

interface IDayService {
   getAllDays(): Promise<IGetAllDays>
}

class DayService implements IDayService {
   async getAllDays(): Promise<IGetAllDays> {
      const { user, error } = await authService.getUser()
      if (error || !user) {
         return {
            error: error || "Can't retrieve days because authorization failed!"
         }
      }

      try {
         // TODO: Use "Mongoose" for mapping?
         // TODO: Use a query on the backend for sorting?
         const mongo = user.mongoClient('mongodb-atlas')
         const collection = mongo.db(ENVIRONMENT.databaseName).collection<IDay>(ENVIRONMENT.databaseTable)
         const days = await collection.find()
         return { days }
      } catch (e: any) {
         const error = e.toString()
         return { error }
      }
   }
}

const dayService = new DayService()

export default dayService