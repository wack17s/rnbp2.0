import React, { Component, PropTypes } from 'react';
import { View }      from 'react-native';

import { TabNavigator } from 'react-navigation';

import ExploreTab  from '../containers/tabs/ExploreTabContainer.js';

import LibraryTab  from '../components/tabs/LibraryTab.js';
import SearchTab   from '../components/tabs/SearchTab.js';
import HistoryTab  from '../components/tabs/HistoryTab.js';
import BookmarkTab from '../components/tabs/BookmarkTab.js';

import Header from '../components/layout/Header.js';

import { tabBarConfig } from './tabsConfig.js';

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
        ...tabBarConfig
    }
);

export default class extends Component {
    static propTypes = {
        setCurrentRoute: PropTypes.func,
        navigation     : PropTypes.object
    }

    handleNavigationStateChange = (prevState, nextState) => {
        this.props.setCurrentRoute(nextState.routes[nextState.index]);
    }

    static navigationOptions = {
        gesturesEnabled: false,
        header: <Header />
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Tabs
                    onNavigationStateChange = {this.handleNavigationStateChange}
                    screenProps             = {{
                        mainNavigation: this.props.navigation
                    }}
                />
            </View>
        );
    }
}
