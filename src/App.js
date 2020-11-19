import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import ProblemPage from "./components/problems/ProblemPage";
import Schedule from "./components/pages/Schedule";
import ScheduleContext from './context/schedule/scheduleContext';

function App() {
  const scheduleContext = useContext(ScheduleContext);

  const { setInitialState } = scheduleContext;

  const [value, setValue] = useState(JSON.parse(localStorage.getItem('algoSchedule')) || []);
  const [num, setNum] = useState(JSON.parse(localStorage.getItem('algoCompleted')) || 0);

  useEffect(() => {
    setInitialState(value, num)
  },[])
  
  return (
      <Router>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={ProblemPage} >
                {value.length !==0 && <Redirect to='/schedule' />}
              </Route>
              <Route exact path='/schedule' component={Schedule} />
            </Switch>
          </div>
        </div>
      </Router>

  );
}

export default App;
