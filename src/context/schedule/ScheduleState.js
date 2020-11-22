import React, {useReducer} from 'react';
import ScheduleContext from './scheduleContext';
import ScheduleReducer from './scheduleReducer';
import { SAVE_SCHEDULE, SET_COMPLETED, INCREASE_COUNT, GET_LOCALSTORAGE, RESET_SCHEDULE} from '../types';

const ScheduleState = props => {
  const initialState = {
    schedule: null,
    loading:false,
    complete: 0,
    scheduleset: false,
  }

  const [state, dispatch] = useReducer(ScheduleReducer, initialState);

  // set intial state from local storage
  const setInitialState = (value, num) => {
    if(value.length !==0 ){
    dispatch({type: GET_LOCALSTORAGE, payload:{value,num}})
    }
  }

  // Save Schedule
  const saveSchedule = (arr) => {
    dispatch({type: SAVE_SCHEDULE, payload: arr})
  }

  // Mark problem as completed
  const setCompleted = (newSchedule) => {
    increaseCount();
    dispatch({type: SET_COMPLETED, payload: newSchedule})
    saveToLocalStorage(newSchedule)

  }

  const increaseCount = () => {
    dispatch({type: INCREASE_COUNT})
  }

  const saveToLocalStorage = (arr) => {
    localStorage.setItem('algoSchedule', JSON.stringify(arr))
  }

  const resetSchedule = () => {
    localStorage.removeItem('algoSchedule');
    localStorage.removeItem('algoCompleted');
    dispatch({type: RESET_SCHEDULE});
  }

  return <ScheduleContext.Provider
    value={{
      schedule: state.schedule,
      loading: state.loading,
      complete: state.complete,
      scheduleset: state.scheduleset,
      saveSchedule,
      setCompleted,
      saveToLocalStorage,
      increaseCount,
      setInitialState,
      resetSchedule

    }}
  
  >
    {props.children}
  </ScheduleContext.Provider>
}

export default ScheduleState;