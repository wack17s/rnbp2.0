import { Dimensions, StyleSheet } from 'react-native';

const windowContainer = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: windowContainer.width,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});
