import React, { useState } from 'react'
import './Day.scss'
import { format } from 'date-fns'
import ReadonlyDay from '../ReadonlyDay/ReadonlyDay'
import EditableDay from '../EditableDay/EditableDay'

interface DayProps {

}

export function Day({ }: DayProps): JSX.Element {
	const [isEditMode, setEditMode] = useState(false);

	return (
		<article className="day">
			<div className="day__heading">
				<div className="day__heading-left-col">
					<h3 className="day__heading-date">
						2023-03-28
					</h3>
					<span className="day__heading-weekday">
						{format(new Date(), 'EEEE')}
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

			{isEditMode && (<EditableDay />)}
			{!isEditMode && (<ReadonlyDay />)}
		</article>
	)
}
