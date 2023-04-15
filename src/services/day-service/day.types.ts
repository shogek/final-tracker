import { IDay } from '../../models/Day.model'
import { IError } from '../../types/Error.type'

export type IGetAllDays = {
   error?: IError
   days?: IDay[]
}