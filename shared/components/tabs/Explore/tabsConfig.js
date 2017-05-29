import React from 'react';
import { View, Text, Dimensions } from 'react-native';

export function tabBarIcon(title, style) {
    return (
        <View
            style = {{
                width: windowContainer.width / 3,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 2,
                backgroundColor: 'white',
                borderColor: style.focused ? '#4da6ff' : 'white'
            }}
        >
            <Text style={{ color: style.tintColor }}>{title}</Text>
        </View>
    );
}

const windowContainer = Dimensions.get('window');

export const tabBarConfig = {
    tabBarOptions: {
        activeTintColor  : '#808080',
        inactiveTintColor: 'black',
        indicatorStyle: { height: 0 },
        upperCaseLabel: false,
        style         : {
            backgroundColor: 'white',
            height: 40
        },
        iconStyle     : { width: windowContainer.width / 3, height: 40 },
        tabStyle      : { width: windowContainer.width / 3, height: 40 },
        showIcon      : true,
        showLabel     : false
    },
    tabBarPosition  : 'top',
    animationEnabled: false,
    swipeEnabled    : false
};
