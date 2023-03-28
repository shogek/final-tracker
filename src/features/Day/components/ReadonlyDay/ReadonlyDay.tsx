import React from 'react'
import './ReadonlyDay.scss'
import { format } from 'date-fns'

interface ReadonlyDayProps {

}

export default function ReadonlyDay({ }: ReadonlyDayProps): JSX.Element {
   return (
      <div className="readonly-day">
         <p className="readonly-day__line">✓ Fasted 16h</p>
         <p className="readonly-day__line">✓ 10k steps</p>
         <p className="readonly-day__line">S × 0</p>
         <p className="readonly-day__line">Kvd × 2</p>
      </div>
   )
}
