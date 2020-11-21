import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import ProblemPage from "./components/problems/ProblemPage";
import Schedule from "./components/pages/Schedule";
import ScheduleContext from './context/schedule/scheduleContext';

import DndProblems from './components/dndproblems/DndProblems'


function App(props) {
  const scheduleContext = useContext(ScheduleContext);

  const { setInitialState } = scheduleContext;
  const [redirect, setRedirect] = useState(false);

  const [value, setValue] = useState(JSON.parse(localStorage.getItem('algoSchedule')) || []);
  const [num, setNum] = useState(JSON.parse(localStorage.getItem('algoCompleted')) || 0);

  useEffect(() => {
    setInitialState(value, num)
  },[])

  const handleSetSchedule = (arr) => {
    scheduleContext.saveSchedule(arr)
    localStorage.setItem('algoSchedule', JSON.stringify(arr))
    setRedirect(true)
  }
  
  return (
      <Router>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={()=> <DndProblems handleSetSchedule={handleSetSchedule}/>} >
                {value.length !==0 || redirect===true ? <Redirect to='/schedule' /> : null}
              </Route>
              <Route exact path='/schedule' component={Schedule} />
            </Switch>
          </div>
        </div>
      </Router>

  );
}

export default App;
