import React, { Fragment, useContext } from "react";
import CalendarCard from "./CalendarCard";
import ScheduleContext from "../../context/schedule/scheduleContext";

const renderCalendar = (i, item) => {
  return (
    <div key={`${i}cal`} className='calendar-card'>
      <CalendarCard problem={item} day={i + 1} />
    </div>
  );
};

const CompleteList = () => {
  const scheduleContext = useContext(ScheduleContext);

  const { schedule } = scheduleContext;

  if (!schedule) {
    return <h3>Setup your Algo problems first</h3>;
  }
  return (
    <Fragment>
      {!schedule  ? (
        <h3>Setup your Algo problems first</h3>
      ) : (
        <div className='calendar-container'>
          {schedule.map((item, idx) => renderCalendar(idx, item))}
        </div>
      )}
    </Fragment>
  );
};

export default CompleteList;
