import { ACHIEVEMENTS } from '../../../configuration/achievements.config'
import { IDay } from '../../../models/Day.model'
import EditableAchievement from '../EditableAchievement/EditableAchievement'
import EditableCounter from '../EditableCounter/EditableCounter'
import './EditableDay.scss'

interface EditableDayProps {
    day: IDay
}

export default function EditableDay({ day }: EditableDayProps): JSX.Element {
    return (
        <div className="editable-day">
            <EditableAchievement name={ACHIEVEMENTS.noDarkChocolate.label} isChecked={day.darkChocolateCount <= 0} />
            <EditableAchievement name={ACHIEVEMENTS.noSnacking.label} isChecked={day.hasSnacked} />
            <EditableAchievement name={ACHIEVEMENTS.fasted16.label} isChecked={day.hasFasted} />
            <EditableAchievement name={ACHIEVEMENTS.tenSteps.label} isChecked={day.hasWalkedSteps} />

            <EditableCounter name="S" value={day.sexCount} />
            <EditableCounter name="Kava" value={day.coffeeCupsCount} />
            <EditableCounter name="Kvd" value={day.darkChocolateCount} />
            <EditableCounter name="Candy" value={day.candyCount} />
        </div>
    )
}
