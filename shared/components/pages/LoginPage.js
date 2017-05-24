import React, { PureComponent, PropTypes } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

export default class extends PureComponent {
    static propTypes = {
        navigation: PropTypes.object
    }

    handleLogin = () => {
        this.props.navigation.navigate('Dashboard');
    }

    render() {
        return (
            <View>
                <Text>Login page</Text>

                <TouchableWithoutFeedback onPress={this.handleLogin}>
                    <View style={{ height: 200, width: 200, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Login</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
