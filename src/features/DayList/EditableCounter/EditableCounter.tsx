import { useState } from 'react'
import './EditableCounter.scss'

interface EditableCounterProps {
   name: string
   value: number
}

export default function EditableCounter({ name, value }: EditableCounterProps): JSX.Element {
   const [currentValue, setCurrentValue] = useState(value)

   const isIncrease = currentValue > value
   const isDecrease = currentValue < value

   const handleValueIncrease = () => setCurrentValue(currentValue + 1)

   const handleValueDecrease = () => {
      if (currentValue <= 0) {
         setCurrentValue(0)
         return
      }

      setCurrentValue(currentValue - 1)
   }

   return (
      <div className="editable-counter">
         <button type="button" onClick={handleValueIncrease}>
            +
         </button>

         <p>
            {name} × <span className={isIncrease ? 'increase' : isDecrease ? 'decrease' : ''}>{currentValue}</span>
         </p>

         <button type="button" onClick={handleValueDecrease} disabled={currentValue <= 0}>
            -
         </button>
      </div>
   )
}