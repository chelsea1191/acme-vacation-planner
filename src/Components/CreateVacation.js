import React from "react"


const CreateVacation = (props) => {
  //const [date, setDate] = useState(moment().format("MM/DD/YYYY"))
  // line 10- onChange={event => setDate(event.target.value)} value={date}
  //console.log(props)
  const createVacation = event => {
    event.preventDefault()
    let newVaca = {}
    newVaca['id'] = props.vacations.length + 1
    console.log(event.target)
    newVaca['start'] = event.target.elements[0].value;
    newVaca['end'] = event.target.elements[1].value;
    props.setVacations([...props.vacations, newVaca])
  }

return (
  <div className="card">
    <form onSubmit={createVacation}>
      <div>
        <p>Start Date</p>
        <input type="date"/>
      </div>
      <div>
       <p>End Date</p>
       <input type="date"/>
      </div>
      <div>
       <button>Create Vacation</button>
      </div>
    </form>
  </div>
)
}

export default CreateVacation
