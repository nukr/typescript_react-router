import { INCREASE, DECREASE } from '../constants';

const initialState = {
  number: 1
};

interface countAction {
  amount: number,
  type: string
}

export default function update(state = initialState, action: countAction) {
  if (action.type === INCREASE) {
    return { number: state.number + action.amount };
  } else if (action.type === DECREASE) {
    return { number: state.number - action.amount };
  }
  return state;
}
