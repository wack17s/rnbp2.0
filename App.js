import React, { Component } from 'react';
import { Provider }         from 'react-redux';

import TrueNavigation from './shared/containers/TrueNavigationContainer.js';

import store from './shared/store/configureStore.js';

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <TrueNavigation />
            </Provider>
        );
    }
}
