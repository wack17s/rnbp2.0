import { Dimensions, StyleSheet } from 'react-native';

const windowContainer = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: windowContainer.width,
        height: 40
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        backgroundColor: 'white',
        borderColor : 'white'
    },
    smallButton: {
        flex: 0.5
    },
    focusedButton: {
        borderColor: '#4da6ff'
    },

    label: {

    },
    focusedLabel: {
        color: 'grey'
    }
});
