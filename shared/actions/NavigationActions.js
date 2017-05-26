export const CURRENT_ROUTE = 'CURRENT_ROUTE';

export function setCurrentRoute(currentRoute) {
    return dispatch => {
        dispatch({
            type: CURRENT_ROUTE,
            currentRoute
        });
    };
}
