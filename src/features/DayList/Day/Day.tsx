import { useState } from 'react'
import './Day.scss'
import { format } from 'date-fns'
import ReadonlyDay from '../ReadonlyDay/ReadonlyDay'
import EditableDay from '../EditableDay/EditableDay'
import { IDay } from '../../../models/Day.model'

interface DayProps {
	day: IDay
}

export function Day({ day }: DayProps): JSX.Element {
	const [isEditMode, setEditMode] = useState(false);

	return (
		<article className="day">
			<div className="day__heading">
				<div className="day__heading-left-col">
					<h3 className="day__heading-date">
						{format(day.date, 'yyyy-MM-dd')}
					</h3>
					<span className="day__heading-weekday">
						{format(day.date, 'EEEE')}
					</span>
				</div>

				<div className="day__heading-right-col">
					{!isEditMode && (
						<button className="day__button" type="button" onClick={() => setEditMode(true)}>
							✏️
						</button>
					)}

					{isEditMode && (
						<>
							<button className="day__button" type="button" onClick={() => setEditMode(false)}>
								✔️
							</button>

							<button className="day__button" type="button" onClick={() => setEditMode(false)}>
								❌
							</button>
						</>
					)}
				</div>
			</div>

			{isEditMode && (<EditableDay day={day} />)}
			{!isEditMode && (<ReadonlyDay day={day} />)}
		</article>
	)
}
