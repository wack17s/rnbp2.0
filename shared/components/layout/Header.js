import React, { PureComponent } from 'react';
import { View, Text }           from 'react-native';

import Styles from './HeaderStyles.js';

export default class extends PureComponent {
    render() {
        return (
            <View style={Styles.container}>
                <Text>Custom Header</Text>
            </View>
        );
    }
}
