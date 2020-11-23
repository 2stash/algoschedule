import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import CompleteList from "../calendar/CompleteList";
import ScheduleContext from "../../context/schedule/scheduleContext";
import Dashboard from "../dashboard/Dashboard";

const Schedule = (props) => {
  const scheduleContext = useContext(ScheduleContext);
  const { schedule, complete } = scheduleContext;

  if (schedule === null || schedule === undefined || schedule.length === 0) {
    return <Redirect to='/algoschedule' />;
  } else if (schedule.length === complete) {
    return <p>You WIN!</p>;
  } else {
    return (
      <div className='schedule-container'>
        <Dashboard />
        <CompleteList />
      </div>
    );
  }
};

export default Schedule;
