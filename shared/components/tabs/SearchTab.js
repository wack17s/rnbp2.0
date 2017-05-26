import React, { PureComponent } from 'react';
import { View, TextInput }           from 'react-native';

import { tabBarIcon }   from '../../navigation/tabsConfig.js';

import TabBar from '../other/TabBar.js';

export default class extends PureComponent {
    handlePress = (type) => {
        console.log('type', type);
    }

    static navigationOptions = {
        tabBarIcon: tabBarIcon.bind(this, 'Search')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    style           = {{ height: 40, width: 300, backgroundColor: 'white' }}
                    returnKeyType   = 'next'
                    placeholder     = 'Search'
                />
                <TabBar
                    tabs={['All', 'Some Stuff 1', 'Some Stuff 2', 'Some Stuff 3']}
                    onPress={this.handlePress}
                />
            </View>
        );
    }
}
