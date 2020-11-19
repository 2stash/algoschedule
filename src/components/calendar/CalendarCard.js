import React, {useContext} from 'react'
import ScheduleContext from '../../context/schedule/scheduleContext';

const CalendarCard = ({day, problem: {id,title,difficulty, category, completed}}) => {
  const scheduleContext = useContext(ScheduleContext);

  const { setCompleted,schedule, complete} = scheduleContext;
  
  const setCompletedHandler = (idx) => {
    // 1 was added to idx on parent so first day is not 0, so subtracting it back out
    idx --;
    const updatedProblem = {
      id: id,
      title: title,
      difficulty: difficulty,
      category: category,
      completed: true
    }
    const newSchedule = schedule
    newSchedule.splice(idx, 1,updatedProblem)
    setCompleted(newSchedule)
  }
  
  if (completed === true){
    return (
      <div className="card-calendar completed">
        <h3>Day {day}</h3>
        <h3>{title}</h3>
        <p>{difficulty}</p>
        <p>{category}</p>
        <div className="card-calendar-button">
        <button className="btn btn-block btn-success" onClick={()=>setCompletedHandler(day)}>Done</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="card-calendar">
        <h3>Day {day}</h3>
        <h3>{title}</h3>
        <p>{difficulty}</p>
        <p>{category}</p>
        <div className="card-calendar-button">
        <button className="btn btn-block btn-danger" onClick={()=>setCompletedHandler(day)}>Done</button>
        </div>
      </div>
    )
  }
  
}

export default CalendarCard
