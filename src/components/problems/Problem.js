import React from 'react'

const Problem = (props) => {
  let color;
  if(props.difficulty === "Easy"){
    color = "#34ed43"
  } else if(props.difficulty === "Medium"){
    color ="#51adef"
  } else if(props.difficulty === "Hard") {
    color = "#ef5151"
  }

  return (
    <div className="card" >
      <h4 className="name">{props.title}</h4>
      <span className="trash" onClick={()=> props.delete(props.id, props.difficulty, props.category)}><i className="fas fa-trash"></i></span>
      <span className="grabber-div" style={{backgroundColor: color}}></span>
    </div>
  )
}

export default Problem
