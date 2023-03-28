import React from 'react'
import './Day.scss'
import { format } from 'date-fns'

interface DayProps {

}

export default function Day({ }: DayProps): JSX.Element {
   return (
      <article className="day">
         <h3>2023-03-28  ·  {format(new Date(), 'EEEE')}</h3>
         <p className="day__line">✓ Fasted 16h</p>
         <p className="day__line">✓ 10k steps</p>
         <p className="day__line">S × 0</p>
         <p className="day__line">Kvd × 2</p>
      </article>
   );
}