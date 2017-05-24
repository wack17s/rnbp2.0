import React, { Component } from 'react';
import { View, Platform } from 'react-native';

import { TabNavigator } from 'react-navigation';

import ExploreTab  from '../components/tabs/ExploreTab.js';
import LibraryTab  from '../components/tabs/LibraryTab.js';
import SearchTab   from '../components/tabs/SearchTab.js';
import HistoryTab  from '../components/tabs/HistoryTab.js';
import BookmarkTab from '../components/tabs/BookmarkTab.js';

const Tabs = TabNavigator(
    {
        Explore: {
            screen: ExploreTab
        },
        Library: {
            screen: LibraryTab
        },
        Search: {
            screen: SearchTab
        },
        History: {
            screen: HistoryTab
        },
        Bookmark: {
            screen: BookmarkTab
        }
    }, {
        tabBarOptions: {
            activeTintColor: '#e91e63'
        },
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        paths: (a) => console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', a)
    }
);

export default class extends Component {
    static navigationOptions = {
        title: 'lol',
        gesturesEnabled: false,
        headerStyle: { marginTop: Platform.OS === 'android' ? 25 : 0 }
    }

    render() {
        console.log('wtfTABS', this.props)
        return (
            <View style={{ flex: 1 }}>
                <Tabs
                    onNavigationStateChange={(a, b) => console.log('onNavigationStateChange11111111111111111', b)}
                />
            </View>
        );
    }
}
