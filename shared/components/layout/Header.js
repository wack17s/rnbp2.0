import React, { PureComponent } from 'react';
import { View, Text }           from 'react-native';

import Modal from '../other/Modal.js';

import Styles from './HeaderStyles.js';

export default class extends PureComponent {
    render() {
        return (
            <View style={Styles.container}>
                <Text>Custom Header</Text>
                <Modal />
            </View>
        );
    }
}
