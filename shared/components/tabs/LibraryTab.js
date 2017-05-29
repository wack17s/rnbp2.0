import React, { PureComponent } from 'react';
import { View }           from 'react-native';

import Modal from '../other/Modal.js';

import { tabBarIcon } from '../../navigation/tabsConfig.js';

export default class extends PureComponent {
    static navigationOptions = {
        tabBarIcon: tabBarIcon.bind(this, 'Modals')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
                <Modal />
                <Modal animation='fade' label={'Show small modal'} type='small' />
            </View>
        );
    }
}
