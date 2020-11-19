import React, { useState, useContext, Fragment } from "react";
import STORE from "../../STORE";
import ProblemList from "./ProblemList";
import Options from "../nav/Options";

import ScheduleContext from '../../context/schedule/scheduleContext';

const ProblemCategory = (props) => {
  const scheduleContext = useContext(ScheduleContext);
  
  const [getProblems, setGetProblems] = useState(STORE);
  const [category, setCategory] = useState("categoryList");
  const [filter, setFilter] = useState([]);

  let sort = category;

  const handleSetCategory = () => {
    if (category === "categoryList") {
      setCategory("levelLists");
    }
    if (category === "levelLists") {
      setCategory("categoryList");
    }
  };
  const handleSetSchedule = () => {
    let tempId, tempObj;
    let tempArray = [];

    getProblems[sort].map((list) => {
      for (let i = 0; i < list.cardIds.length; i++) {
        tempId = list.cardIds[i];
        tempObj = getProblems.allProblems[tempId];
        tempArray.push(tempObj);
      }
      return tempArray
    });

    if (filter.length > 0) {
      for (let i = 0; i < filter.length; i++) {
        for (let j = 0; j < tempArray.length; j++) {
          if (filter[i] === tempArray[j].id) {
            tempArray.splice(j, 1);
          }
        }
      }
    }
    scheduleContext.saveSchedule(tempArray)
    localStorage.setItem('algoSchedule', JSON.stringify(tempArray))
  };

  const deleteEventHandler = (id, difficulty, category) => {
    setFilter([...filter, id]);
  };

  return (
    <Fragment>
      <Options
        handleSetSchedule={handleSetSchedule}
        handleSetCategory={handleSetCategory}
      />
      <div className='list-container'>
        {getProblems[sort].map((list) => (
          <div className='list-box' key={list.id}>
            <h3>{list.category}</h3>
            <div className='list'>
              <ProblemList
                category={list.category}
                delete={deleteEventHandler}
                problems={list.cardIds.map((id) => getProblems.allProblems[id])}
              />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProblemCategory;
