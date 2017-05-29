import React, { PureComponent, PropTypes } from 'react';
import { View, Modal, Text, TouchableWithoutFeedback } from 'react-native';

export default class extends PureComponent {
    static propTypes = {
        animation: PropTypes.string,
        label    : PropTypes.string,
        type     : PropTypes.string
    }

    state = {
        modalVisible: false
    }

    handleRequestClose = () => {
        console.log('close');
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { animation, label, type } = this.props;

        return (
            <View style={{ marginTop: 12 }}>
                <Modal
                    animationType  = {animation || 'slide'}
                    transparent    = {type === 'small'}
                    visible        = {this.state.modalVisible}
                    onRequestClose = {this.handleRequestClose}
                >
                    <View style={{ flex: 1, marginTop: 22, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: 200,
                                width: 300,
                                backgroundColor: 'white',
                                borderRadius: type === 'small' ? 10 : 0
                            }}
                        >
                            <Text style={{ fontSize: 30 }}>Hello World!</Text>

                            <TouchableWithoutFeedback onPress={this.setModalVisible.bind(null, false)}>
                                <View>
                                    <Text style={{ color: 'red', fontWeight: '600' }}>Hide Modal</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                    </View>
                </Modal>

                <TouchableWithoutFeedback onPress={this.setModalVisible.bind(null, true)}>
                    <View>
                        <Text style={{ color: 'green', fontWeight: '600' }}>{label || 'Show Info Modal'}</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}
