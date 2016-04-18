import { RECEIVE_DATA } from '../actions/home';

export default function home(state = 'initial', action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data;
    default:
      return state;
  }
}