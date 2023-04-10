import DayList from '../features/DayList/DayList'
import useDays from '../hooks/useDays.hook';

export default function Home(): JSX.Element {
   const { days, isLoading, error } = useDays();

   if (error) {
      return (
         <div>
            <h1>Error while trying to retrieve the days!</h1>
            <p>{error}</p>
         </div>
      )
   }

   if (isLoading) {
      return (
         <div>
            <h1>Retrieving the days...</h1>
            <p>Please wait while we fetch the data.</p>
         </div>
      )
   }

   return (
      <div>
         <DayList days={days} />
      </div>
   )
}
