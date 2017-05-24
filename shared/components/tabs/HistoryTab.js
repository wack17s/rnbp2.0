import React, { PureComponent } from 'react';
import { View, Text }           from 'react-native';

export default class extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text>History</Text>
            </View>
        );
    }
}
