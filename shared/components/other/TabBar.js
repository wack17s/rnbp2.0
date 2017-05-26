import React, { Component, PropTypes } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import Styles from './TabBarStyles.js';

export default class extends Component {
    static propTypes = {
        onPress   : PropTypes.func,
        tabs      : PropTypes.array,
        initialTab: PropTypes.string
    }

    state = {
        focused: this.props.initialTab || this.props.tabs[0]
    }

    handlePress = (type) => {
        this.setState({ focused: type });
        this.props.onPress(type);
    }

    renderButtons = () => {
        const { focused } = this.state;
        const labels = this.props.tabs;

        return labels.map(label => (
            <TouchableWithoutFeedback key={label} onPress={this.handlePress.bind(null, label)}>
                <View
                    style={[
                        Styles.button,
                        label === 'All' ? Styles.smallButton : {},
                        focused === label ? Styles.focusedButton : {}
                    ]}
                >
                    <Text style={focused === label ? Styles.focusedLabel : Styles.label}>{label}</Text>
                </View>
            </TouchableWithoutFeedback>
        ));
    }

    render() {
        return (
            <View style={Styles.container}>
                {this.renderButtons()}
            </View>
        );
    }
}
