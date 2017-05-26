import { CURRENT_ROUTE } from '../actions/NavigationActions.js';

export default function data(state = {}, action) {
    switch (action.type) {
        case CURRENT_ROUTE:
            return { ...action };
        default:
            return state;
    }
}
