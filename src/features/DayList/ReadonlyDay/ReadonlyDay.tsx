import React from 'react'
import './ReadonlyDay.scss'
import { format } from 'date-fns'
import { ACHIEVEMENTS } from '../../../configuration/achievements.config'

interface ReadonlyDayProps {

}

export default function ReadonlyDay({ }: ReadonlyDayProps): JSX.Element {
   return (
      <div className="readonly-day">
         <p className="readonly-day__line">
            <span>✓</span>
            {ACHIEVEMENTS.noDarkChocolate.label}
         </p>
         <p className="readonly-day__line">
            <span>✓</span>
            {ACHIEVEMENTS.fasted16.label}
         </p>
         <p className="readonly-day__line">
            <span>✓</span>
            {ACHIEVEMENTS.tenSteps.label}
         </p>
         <p className="readonly-day__line">S × 0</p>
         <p className="readonly-day__line">Kvd × 2</p>
      </div>
   )
}
