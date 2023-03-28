import React from 'react'
import './EditableDay.scss'

interface EditableDayProps {

}

export default function EditableDay({ }: EditableDayProps): JSX.Element {
    return (
        <div className="editable-day">
            <div>
                <input type="checkbox" name="fasted-16" value="fasted-16" />
                <label htmlFor="fasted-16">
                    ✓ Fasted 16h
                </label>
            </div>

            <div>
                <input type="checkbox" name="no-dark-chocolate" value="no-dark-chocolate" />
                <label htmlFor="no-dark-chocolate">
                    ✓ No dark chocolate
                </label>
            </div>

            <div>
                <input type="checkbox" name="no-snacking" value="no-snacking" />
                <label htmlFor="no-snacking">
                    ✓ No snacking
                </label>
            </div>

            <div>
                <input type="checkbox" name="10k-steps" value="10k-steps" />
                <label htmlFor="10k-steps">
                    ✓ 10k steps
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
