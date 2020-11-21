import React, { useContext, useEffect } from "react";
import CompleteList from "../calendar/CompleteList";
import ScheduleContext from "../../context/schedule/scheduleContext";
import Dashboard from "../dashboard/Dashboard";

const Schedule = () => {
  const scheduleContext = useContext(ScheduleContext);

  const { schedule, complete } = scheduleContext;

  if (schedule === null || schedule === undefined) {
    return <p>hi</p>;
  }
  return (
    <div className='schedule-container'>
      <Dashboard />
      <CompleteList />
    </div>
  );
};

export default Schedule;
