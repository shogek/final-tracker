import { ACHIEVEMENTS } from '../../../configuration/achievements.config'
import './EditableDay.scss'
import { IDay } from '../../../models/Day.model'

interface EditableDayProps {
    day: IDay
}

export default function EditableDay({ }: EditableDayProps): JSX.Element {
    return (
        <div className="editable-day">
            <div>
                <input type="checkbox" name="no-dark-chocolate" value={ACHIEVEMENTS.noDarkChocolate.id} />
                <label htmlFor="no-dark-chocolate">
                    {ACHIEVEMENTS.noDarkChocolate.label}
                </label>
            </div>

            <div>
                <input type="checkbox" name="no-snacking" value={ACHIEVEMENTS.noSnacking.id} />
                <label htmlFor="no-snacking">
                    {ACHIEVEMENTS.noSnacking.label}
                </label>
            </div>

            <div>
                <input type="checkbox" name="fasted-16" value={ACHIEVEMENTS.fasted16.id} />
                <label htmlFor="fasted-16">
                    {ACHIEVEMENTS.fasted16.label}
                </label>
            </div>

            <div>
                <input type="checkbox" name="10k-steps" value={ACHIEVEMENTS.tenSteps.id} />
                <label htmlFor="10k-steps">
                    {ACHIEVEMENTS.tenSteps.label}
                </label>
            </div>

            <div className="editable-day__number-row">
                <span>S</span>
                <span>×</span>
                <input className="editable-day__number-input" type="number" value="1"/>
            </div>

            <div className="editable-day__number-row">
                <span>Kvd</span>
                <span>×</span>
                <input className="editable-day__number-input" type="number" value="4" />
            </div>
        </div>
    )
}
