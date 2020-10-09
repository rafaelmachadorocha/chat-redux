
import { DISPLAY_SPINNER } from '../actions';
import { HIDE_SPINNER } from '../actions';

export default function spinnerReducer(state = false, action) {
  switch (action.type) {
    case DISPLAY_SPINNER:
      return action.payload;
    case HIDE_SPINNER:
      return action.payload;
    default:
      return state;
  }
}
