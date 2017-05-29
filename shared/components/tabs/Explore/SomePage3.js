import React, { PureComponent } from 'react';
import { View }                 from 'react-native';

import FlatList from '../../other/FlatList.js';

import { tabBarIcon } from './tabsConfig.js';

export default class extends PureComponent {
    static navigationOptions = {
        tabBarIcon: tabBarIcon.bind(this, 'FlatList H.')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList horizontal />
                <View style ={{ height: 10 }} />
                <FlatList horizontal />
            </View>
        );
    }
}
