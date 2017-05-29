import React, { PureComponent } from 'react';
import { View }                 from 'react-native';

import SectionList from '../../other/SectionList.js';

import { tabBarIcon } from './tabsConfig.js';

export default class extends PureComponent {
    static navigationOptions = {
        tabBarIcon: tabBarIcon.bind(this, 'SectionList')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SectionList />
            </View>
        );
    }
}
