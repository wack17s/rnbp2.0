import React, { Component } from 'react';
import { View }             from 'react-native';
import { StackNavigator }   from 'react-navigation';

import LoginPage from '../components/pages/LoginPage.js';

import TabNavigation from '../containers/navigation/TabNavigationContainer.js';

const NavRouter = StackNavigator(
    {
        Login: {
            screen: LoginPage
        },
        Dashboard: {
            screen: TabNavigation
        }
    },
    {
        initialRouteName: 'Dashboard',
        swipeEnabled: false
    }
);

export default class TrueNavigationComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavRouter />
            </View>
        );
    }
}
