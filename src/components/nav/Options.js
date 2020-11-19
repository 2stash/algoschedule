import React from 'react'
import {Link} from 'react-router-dom';

const Options = (props) => {
  return (
    <div className="btn-container">
      <button className="btn btn-dark btn-sort" onClick={props.handleSetCategory}>Sort By Difficutly</button>
      <button className="btn btn-danger btn-sort" onClick={props.handleSetCategory}>Sort By Category</button>
      <Link to="/schedule" ><button className="btn btn-success btn-sort" onClick={props.handleSetSchedule} >Set Schedule</button></Link>
    </div>
  )
}

export default Options;
