import React, { useContext } from "react";
import ScheduleContext from "../../context/schedule/scheduleContext";

const Dashboard = () => {
  const scheduleContext = useContext(ScheduleContext);

  const { schedule, complete } = scheduleContext;
  
  let currentProblemIndex = schedule.findIndex((problem) => problem.completed === false)
  let currentDay = currentProblemIndex + 1;
  let currentTitle = schedule[currentProblemIndex].title;

  return (
    <div className='dashboard-container'>
        <div className="dashboard-card">Day {currentDay}</div>
        <div className="dashboard-card">{schedule !== null && schedule !== undefined ? currentTitle : null}</div>

      <div className="dashboard-card">
        {complete && <span className='important-number'>{complete} </span>}

        <span> out of </span>
        {schedule !== null ?  (
          <span className='important-number'>{schedule.length}</span>
        ): null}
        <span> Completed</span>
      </div>
    </div>
  );
};

export default Dashboard;
