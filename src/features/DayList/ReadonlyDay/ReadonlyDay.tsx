import './ReadonlyDay.scss'
import { ACHIEVEMENTS } from '../../../configuration/achievements.config'
import { IDay } from '../../../models/Day.model'

interface ReadonlyDayProps {
   day: IDay
}

export default function ReadonlyDay({ day }: ReadonlyDayProps): JSX.Element {
   return (
      <div className="readonly-day">
         <p className="readonly-day__line">
            {day.darkChocolateCount < 1 && (
               <>
                  <span>✓</span>
                  {ACHIEVEMENTS.noDarkChocolate.label}
               </>
            )}
         </p>
         <p className="readonly-day__line">
            {day.hasFasted && (
               <>
                  <span>✓</span>
                  {ACHIEVEMENTS.fasted16.label}
               </>
            )}
         </p>
         <p className="readonly-day__line">
            {day.hasWalkedSteps && (
               <>
                  <span>✓</span>
                  {ACHIEVEMENTS.tenSteps.label}
               </>
            )}
         </p>
         <p className="readonly-day__line">S × {day.sexCount}</p>
         <p className="readonly-day__line">Kava × {day.coffeeCupsCount}</p>
         <p className="readonly-day__line">Kvd × {day.darkChocolateCount}</p>
      </div>
   )
}
