import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const windowContainer = Dimensions.get('window');

const Styles = StyleSheet.create({
    indicator: {
        height: 0
    },
    tabBar: {
        backgroundColor: 'white',
        height: 40
    },
    tab: {
        width: windowContainer.width / 3,
        height: 40
    },
    innertab: {
        width: windowContainer.width / 3,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        backgroundColor: 'white'
    }
});

export function tabBarIcon(title, style) {
    return (
        <View
            style = {[
                Styles.innertab,
                { borderColor: style.focused ? '#4da6ff' : 'white' }
            ]}
        >
            <Text style={{ color: style.tintColor }}>{title}</Text>
        </View>
    );
}

export const tabBarConfig = {
    tabBarOptions: {
        activeTintColor  : '#808080',
        inactiveTintColor: 'black',
        indicatorStyle: Styles.indicator,
        upperCaseLabel: false,
        style         : Styles.tabBar,
        iconStyle     : Styles.tab,
        tabStyle      : Styles.tab,
        showIcon      : true,
        showLabel     : false
    },
    tabBarPosition  : 'top',
    animationEnabled: false,
    swipeEnabled    : false
};
