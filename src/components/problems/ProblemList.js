import React, { Fragment } from 'react';
import Problem from './Problem';

const ProblemList = (props) => {
  return (
    <div>
     {props.problems.map(problem => (
      <Problem 
        key={problem.id}
        title={problem.title}
        difficulty={problem.difficulty}
        category={problem.category}
        delete={props.delete}
        id={problem.id}
        />
     ))}
    </div>
  )
}

export default ProblemList;
