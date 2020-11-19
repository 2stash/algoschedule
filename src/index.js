import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import ScheduleState from "./context/schedule/ScheduleState";

ReactDOM.render(
  <React.StrictMode>
    <ScheduleState>
      <App />
    </ScheduleState>
  </React.StrictMode>,
  document.getElementById("root")
);
