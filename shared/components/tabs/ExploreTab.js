import React, { Component, PropTypes } from 'react';
import { View }                        from 'react-native';
import { TabNavigator } from 'react-navigation';

import Video  from '../../containers/tabs/Explore/VideoContainer.js';

import { tabBarIcon }   from '../../navigation/tabsConfig.js';
import { tabBarConfig } from './Explore/tabsConfig.js';

import SomePage1 from './Explore/SomePage1.js';
import SomePage2 from './Explore/SomePage2.js';

const Tabs = TabNavigator(
    {
        SomePage1: {
            screen: SomePage1
        },
        SomePage2: {
            screen: SomePage2
        },
        Video: {
            screen: Video
        }
    }, {
        ...tabBarConfig
    }
);

export default class extends Component {
    static propTypes = {
        setCurrentRoute: PropTypes.func,
        navigation: PropTypes.object
    }

    handleNavigationStateChange = (prevState, nextState) => {
        this.props.setCurrentRoute(nextState.routes[nextState.index]);
    }

    static navigationOptions = {
        tabBarIcon: tabBarIcon.bind(this, 'Explore')
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
