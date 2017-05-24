import { NavRouter } from '../navigation/TrueNavigation.js';

const nav = (state = NavRouter.router.getStateForAction(NavRouter.router.getActionForPathAndParams('Dashboard')), action) => {
    const newState = NavRouter.router.getStateForAction(action, state);

    return newState || state;
};

export default nav;
