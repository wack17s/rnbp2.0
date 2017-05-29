import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export function tabBarIcon(title, style) {
    return (
        <View style = {{ width: 50, height: 52, alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
            <View style={{ width: 30, height: 30, backgroundColor: style.tintColor }} />
            <Text style={{ color: style.tintColor, fontSize: 8, marginTop: 4 }}>{title}</Text>
            <View
                style={{
                    backgroundColor: style.focused ? '#80d4ff' : '#404040',
                    width: 34,
                    marginLeft: (windowWidth / 5 - 34) / 2,
                    marginRight: (windowWidth / 5 - 34) / 2,
                    height: 2,
                    marginTop: 4
                }}
            />
        </View>
    );
}

export const tabBarConfig = {
    tabBarOptions: {
        activeTintColor  : '#808080',
        inactiveTintColor: '#d9d9d9',
        style            : { backgroundColor: '#404040', height: 60 },
        iconStyle        : { width: 50, height: 52 },
        tabStyle         : { padding: 4 },
        indicatorStyle   : { height: 0 },
        showIcon         : true,
        showLabel        : false,
        upperCaseLabel   : false
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
};
