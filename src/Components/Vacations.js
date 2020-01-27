import React from "react"
import moment from 'moment';

const RenderVacations = (props) => {
  //const [date, setDate] = useState(moment().format("MM/DD/YYYY"))
  // line 10- onChange={event => setDate(event.target.value)} value={date}

  const renderVacations = () => {
    if (props.vacations.length === 0) {
      return <p>No vacations yet!</p>;
    } else {
      return props.vacations.map(vacation => (
        <li>
          {moment(vacation.start).format('dddd MM/DD/YYYY')} to{' '}
          {moment(vacation.end).format('dddd MM/DD/YYYY')} lasts -
          {moment(vacation.end).diff(vacation.start, 'days')}{' '}
          {moment(vacation.end).diff(vacation.start, 'days')}
           <button>Delete</button>
        </li>
      ))
    }
  }
return (
  <div className="card">
    <ul className="inline">
      {renderVacations()}
    </ul>
  </div>
)
}

export default RenderVacations

