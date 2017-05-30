import React, { Component, PropTypes } from 'react';
import { View, TouchableWithoutFeedback, Text }                        from 'react-native';
import { Video }                       from 'expo';
import { NavigationActions } from 'react-navigation'

export default class extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        currentRoute: PropTypes.object
    }

    state = {
        isOpen: true
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentRoute.routeName === 'Video') this.setState({ isOpen: true });
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.currentRoute.routeName === 'Video';
    }

    _handleVideoRef = component => {
        const playbackObject = component;

        if (this.state.isOpen) {
            playbackObject.loadAsync({ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }, {}, true);
        }
    }

    handleOpenVideo = () => {
        const resetAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Dashboard' }),
                NavigationActions.navigate({ routeName: 'Video' })
            ]
        });

        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={{ width: 300, height: 400, backgroundColor: 'white' }}>
                <TouchableWithoutFeedback onPress={this.handleOpenVideo}>
                    <View>
                        <Text>Open Video</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
