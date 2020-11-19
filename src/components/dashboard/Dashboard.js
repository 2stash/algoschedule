import React, { useContext } from "react";
import ScheduleContext from "../../context/schedule/scheduleContext";

const Dashboard = () => {
  const scheduleContext = useContext(ScheduleContext);

  const { schedule, complete } = scheduleContext;
  
  let currentDay = complete +1 || 1;

  return (
    <div className='dashboard-container'>
        <div className="dashboard-card">Day {currentDay}</div>
        <div className="dashboard-card">{schedule !== null && schedule !== undefined ? schedule[complete].title : null}</div>

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
