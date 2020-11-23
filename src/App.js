import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Schedule from "./components/pages/Schedule";
import ScheduleContext from './context/schedule/scheduleContext';
import About from './components/pages/About';
import DndProblems from './components/dndproblems/DndProblems'


function App(props) {
  const scheduleContext = useContext(ScheduleContext);

  const { setInitialState, scheduleset } = scheduleContext;
  // eslint-disable-next-line
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('algoSchedule')) || []);
  // eslint-disable-next-line
  const [num, setNum] = useState(JSON.parse(localStorage.getItem('algoCompleted')) || 0);

  useEffect(() => {
 
    setInitialState(value, num)
    // eslint-disable-next-line
  },[])

  const handleSetSchedule = (arr) => {
    scheduleContext.saveSchedule(arr)
    localStorage.setItem('algoSchedule', JSON.stringify(arr))
  }
  
  return (
      <Router>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Switch>
              <Route exact path='/algoschedule' component={()=> <DndProblems handleSetSchedule={handleSetSchedule}/>} >
                {value.length !==0 || scheduleset===true ? <Redirect to='/algoschedule/schedule' /> : null}
              </Route>
              <Route exact path='/algoschedule/schedule' component={Schedule} />
              <Route exact path='/algoschedule/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>

  );
}

export default App;
