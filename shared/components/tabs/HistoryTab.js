import React, { PureComponent, PropTypes } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { tabBarIcon } from '../../navigation/tabsConfig.js';

export default class extends PureComponent {
    static propTypes = {
        screenProps: PropTypes.object
    }

    handleOpenVideo = () => {
        this.props.screenProps.mainNavigation.navigate('Video');
    }

    static navigationOptions = {
        tabBarIcon: tabBarIcon.bind(this, 'History')
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableWithoutFeedback onPress={this.handleOpenVideo}>
                    <View>
                        <Text>Open Video</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
