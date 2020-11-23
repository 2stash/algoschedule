import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import ScheduleContext from '../../context/schedule/scheduleContext';

const Navbar = () => {
  const scheduleContext = useContext(ScheduleContext);

  const { scheduleset } = scheduleContext;
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className="fas fa-clipboard-list"></i> AlgoSchedule
        </h1>
        <ul>
          <li className="">
            {!scheduleset && <Link className="link" to='/algoschedule' >Home</Link>} 
          </li>

          <li>
          {scheduleset && <Link className="link" to='/algoschedule/schedule' >Schedule</Link>}
          </li>

          <li>
            <Link className="link" to='/algoschedule/about'>About</Link>
          </li>
        </ul>
      </nav>
    );
  }

export default Navbar;