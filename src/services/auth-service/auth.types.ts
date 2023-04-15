import { IError } from '../../types/Error.type'
import { IUser } from '../../types/User.type'

export type IGetUser = {
   error?: IError
   user?: IUser
}