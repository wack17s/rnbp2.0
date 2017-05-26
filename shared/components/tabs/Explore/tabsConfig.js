import React from 'react';
import { View, Text } from 'react-native';

export function tabBarIcon(title) {
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Text>{title}</Text>
        </View>
    );
}

export const tabBarConfig = {
    tabBarOptions: {
        indicatorStyle: { backgroundColor: '#4da6ff' },
        iconStyle     : { width: 80 },
        upperCaseLabel: false,
        style         : { backgroundColor: 'white' },
        showIcon      : true,
        showLabel     : false
    },
    tabBarPosition  : 'top',
    animationEnabled: false,
    swipeEnabled    : false
};
