import { IDay } from '../../models/Day.model'
import { Day } from './Day/Day'
import './DayList.scss'

interface DayListProps {
   days: IDay[]
}

export default function DayList({ days }: DayListProps): JSX.Element {
   return (
      <div className="day-list">
         {days.map((day) => (<Day day={day} />))}
      </div>
   )
}
