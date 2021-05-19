import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    aContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    titles: {
        marginTop: '25%',
        width: '100%',
        alignItems: 'center',
    },

    playerName: {
        fontSize: 38,
        fontWeight: '600',

    },

    playerNumber: {
        fontSize: 25,
        color: '#5b5a5c',
    },

    playerDesc: {
        fontSize: 25,
        color: '#5b5a5c',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonsContainer: {
        position: 'absolute',
        top: 225,
        width: '100%',
    },
});

export default styles;