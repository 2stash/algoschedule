import { INCREASE_COUNT, SAVE_SCHEDULE, SET_COMPLETED, GET_LOCALSTORAGE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_LOCALSTORAGE:
      return {
        ...state,
        schedule: action.payload.value,
        complete: action.payload.num || 0,
        scheduleset: true,
      };
    case SAVE_SCHEDULE:
      return {
        ...state,
        schedule: action.payload,
        scheduleset: true,
      };
    case SET_COMPLETED:
      return {
        ...state,
        schedule: action.payload      
      };
    case INCREASE_COUNT:

      let num = state.complete +1 ;
      localStorage.setItem('algoCompleted', JSON.stringify(num))
      return {
        ...state,
        schedule: action.payload,
        complete: state.complete +1,
        
      };
    default:
      return state;
  }
};
