import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import LoginPage from '../components/pages/LoginPage.js';

import TabNavigation from './TabNavigation.js';

export const NavRouter = StackNavigator(
    {
        Index: {
            screen: LoginPage
        },
        Dashboard: {
            screen: TabNavigation
        }
    },
    {
        initialRouteName: 'Index',
        swipeEnabled: false,
        headerMode: 'float'
    }
);

export class TrueNavigationComponent extends Component {
    render() {
        console.log('TRUENAVIGATION', this.props)
        return (
            <View style={{ flex: 1 }}>
                <NavRouter
                    navigation={addNavigationHelpers({
                        dispatch: this.props.dispatch,
                        state: this.props.nav
                    })}
                />
            </View>
        );
    }
}
