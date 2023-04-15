import { useState } from 'react'
import './EditableAchievement.scss'

interface EditableAchievementProps {
   name: string
   isChecked: boolean
}

export default function EditableAchievement({ name, isChecked }: EditableAchievementProps): JSX.Element {
   const [checked, setChecked] = useState(isChecked)

   const handleToggle = () => setChecked(!checked)

   return (
      <div className="editable-achievement">
         <input
            name={name}
            value={name}
            type="checkbox"
            defaultChecked={isChecked}
            onChange={handleToggle}
         />

         <label htmlFor={name} className={isChecked !== checked ? 'changed' : ''}>
            {name}
         </label>
      </div>
   )
}