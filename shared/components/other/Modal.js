import React, { PureComponent } from 'react';
import { View, Modal, Text, TouchableHighlight } from 'react-native';

export default class extends PureComponent {
    state = {
        modalVisible: false
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 12 }}>
                <Modal
                    animationType  = 'slide'
                    transparent    = {false}
                    visible        = {this.state.modalVisible}
                >
                    <View style={{ flex: 1, marginTop: 22, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', justifyContent: 'space-between', height: 200 }}>
                            <Text style={{ fontSize: 30 }}>Hello World!</Text>

                            <TouchableHighlight onPress={this.setModalVisible.bind(null, false)}>
                                <Text style={{ color: 'red', fontWeight: '600' }}>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>

                <TouchableHighlight onPress={this.setModalVisible.bind(null, true)}>
                    <Text style={{ color: 'green', fontWeight: '600' }}>Show Info Modal</Text>
                </TouchableHighlight>

            </View>
        );
    }
}
