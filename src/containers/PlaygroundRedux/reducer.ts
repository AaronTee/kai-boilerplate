import { PGRState, PGRActions } from "./types";

const defaultState: PGRState = {
  counter: 0
}

export default (state: PGRState = defaultState, action: PGRActions) => {
  console.log(state);
  switch(action.type){
    case 'INCREASE_COUNTER':
    state = {
      counter: ++state.counter
    }
    break;

    case 'DECREASE_COUNTER':
    state = {
      counter: --state.counter
    }
    break;

    case 'ASSIGN_COUNTER':
    state = {
      counter: action.payload
    }
    break;
  }

  return state;
}