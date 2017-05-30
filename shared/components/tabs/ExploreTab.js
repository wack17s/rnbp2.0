import React, { PureComponent, PropTypes } from 'react';
import { View }                            from 'react-native';
import { TabNavigator }                    from 'react-navigation';

import { tabBarIcon }   from '../../navigation/tabsConfig.js';
import { tabBarConfig } from './Explore/tabsConfig.js';

import SomePage1 from './Explore/SomePage1.js';
import SomePage2 from './Explore/SomePage2.js';
import SomePage3 from './Explore/SomePage3.js';

const Tabs = TabNavigator(
    {
        SomePage1: {
            screen: SomePage1
        },
        SomePage2: {
            screen: SomePage2
        },
        SomePage3: {
            screen: SomePage3
        }
    }, {
        ...tabBarConfig
    }
);

export default class extends PureComponent {
    static propTypes = {
        setCurrentRoute: PropTypes.func,
        navigation: PropTypes.object
    }

    handleNavigationStateChange = (prevState, nextState) => {
        this.props.setCurrentRoute(nextState.routes[nextState.index]);
    }

    static navigationOptions = {
        tabBarIcon: tabBarIcon.bind(this, 'Lists')
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
