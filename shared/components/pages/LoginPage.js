import React, { PureComponent, PropTypes } from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native';

export default class extends PureComponent {
    static propTypes = {
        navigation: PropTypes.object
    }

    handleLogin = () => {
        this.props.navigation.navigate('Dashboard');
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>Some Logo</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: 300 }}>
                    <Text>Login in some app</Text>
                    <TextInput
                        style           = {{ height: 80, width: 300 }}
                        returnKeyType   = 'next'
                        placeholder     = 'Email'
                    />
                    <TextInput
                        style           = {{ height: 80, width: 300 }}
                        secureTextEntry
                        returnKeyType   = 'next'
                        placeholder     = 'Password'
                    />
                    <TouchableWithoutFeedback onPress={this.handleLogin}>
                        <View
                            style={{
                                height: 80,
                                width: 300,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#80d4ff'
                            }}
                        >
                            <Text style={{ color: 'white' }}>Login</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}
