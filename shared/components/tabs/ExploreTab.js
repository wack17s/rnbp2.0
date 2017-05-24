import React, { Component } from 'react';
import { View }             from 'react-native';

import { TabNavigator } from 'react-navigation';

import LibraryTab1  from './LibraryTab.js';
import SearchTab1   from './SearchTab.js';
import HistoryTab1  from './HistoryTab.js';

const Tabs = TabNavigator(
    {
        Library1: {
            screen: LibraryTab1
        },
        Search1: {
            screen: SearchTab1
        },
        History1: {
            screen: HistoryTab1
        }
    }, {
        tabBarOptions: {
            activeTintColor: '#e91e63'
        },
        tabBarPosition: 'top',
        animationEnabled: false,
        swipeEnabled: false
    }
);

export default class extends Component {
    static navigationOptions = {
        title: 'idk'
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Tabs />
            </View>
        );
    }
}
