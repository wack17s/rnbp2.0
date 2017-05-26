import React, { Component, PropTypes } from 'react';
import { View, Dimensions, Text }      from 'react-native';

import { TabNavigator } from 'react-navigation';

import ExploreTab  from '../containers/tabs/ExploreTabContainer.js';

import LibraryTab  from '../components/tabs/LibraryTab.js';
import SearchTab   from '../components/tabs/SearchTab.js';
import HistoryTab  from '../components/tabs/HistoryTab.js';
import BookmarkTab from '../components/tabs/BookmarkTab.js';

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

function renderHeader() {
    return (
        <View
            style={{
                width: Dimensions.get('window').width,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}
        >
            <Text>Custom Header</Text>
        </View>
    );
}

export default class extends Component {
    static propTypes = {
        setCurrentRoute: PropTypes.func
    }

    handleNavigationStateChange = (prevState, nextState) => {
        this.props.setCurrentRoute(nextState.routes[nextState.index]);
    }

    static navigationOptions = {
        gesturesEnabled: false,
        header: renderHeader()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Tabs
                    onNavigationStateChange={this.handleNavigationStateChange}
                />
            </View>
        );
    }
}
