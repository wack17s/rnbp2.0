import React, { Component, PropTypes } from 'react';
import { View }                        from 'react-native';

import { TabNavigator } from 'react-navigation';

import Video       from '../../containers/tabs/Explore/VideoContainer.js';

import LibraryTab1 from './LibraryTab.js';
import SearchTab1  from './SearchTab.js';

const Tabs = TabNavigator(
    {
        Library1: {
            screen: LibraryTab1
        },
        Search1: {
            screen: SearchTab1
        },
        Video: {
            screen: Video
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
    static propTypes = {
        setCurrentRoute: PropTypes.func
    }

    handleNavigationStateChange = (prevState, nextState) => {
        this.props.setCurrentRoute(nextState.routes[nextState.index]);
    }

    static navigationOptions = {
        title: 'idk'
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
