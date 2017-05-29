import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    indicator: {
        height: 0
    },
    tabBar: {
        backgroundColor: '#404040',
        height: 60,
        elevation: 10,
        shadowOpacity: 1,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },
    tab: {
        padding: 4,
        elevation: 100
    },
    innerTabContainer: {
        width: 50,
        height: 52
    },
    innerTab: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        elevation: 100
    },
    icon: {
        width: 30,
        height: 30,
        elevation: 100
    },
    label: {
        fontSize: 8,
        marginTop: 4
    },
    bottomLine: {
        width: 34,
        marginLeft: (windowWidth / 5 - 34) / 2,
        marginRight: (windowWidth / 5 - 34) / 2,
        height: 2,
        marginTop: 4
    }
});

export function tabBarIcon(title, style) {
    return (
        <View style = {[Styles.innerTabContainer, Styles.innerTab]}>
            <View style={[Styles.icon, { backgroundColor: style.tintColor } ]} />
            <Text style={[ { color: style.tintColor }, Styles.label]}>{title}</Text>
            <View
                style={[
                    Styles.bottomLine,
                    { backgroundColor: style.focused ? '#80d4ff' : '#404040' }
                ]}
            />
        </View>
    );
}

export const tabBarConfig = {
    tabBarOptions: {
        activeTintColor  : '#808080',
        inactiveTintColor: '#d9d9d9',
        style            : Styles.tabBar,
        iconStyle        : Styles.innerTabContainer,
        tabStyle         : Styles.tab,
        indicatorStyle   : Styles.indicator,
        showIcon         : true,
        showLabel        : false,
        upperCaseLabel   : false
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
};
