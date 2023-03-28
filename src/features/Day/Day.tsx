import React, { useState } from 'react'
import './Day.scss'
import { format } from 'date-fns'
import ReadonlyDay from './components/ReadonlyDay/ReadonlyDay'
import EditableDay from './components/EditableDay/EditableDay'

interface DayProps {

}

export function Day({ }: DayProps): JSX.Element {
	const [isEditMode, setEditMode] = useState(false);

	return (
		<article className="day">
			<div className="day__title-wrapper">
				<h3 className="day__title">
					2023-03-28  ·  {format(new Date(), 'EEEE')}
				</h3>

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

			{isEditMode && (<EditableDay />)}
			{!isEditMode && (<ReadonlyDay />)}
		</article>
	)
}
