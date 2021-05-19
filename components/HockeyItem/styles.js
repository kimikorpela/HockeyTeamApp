import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    aContainer: {
        width: '100%',
        height: '100%',
    },

    titles: {
        marginTop: '25%',
        width: '100%',
        alignItems: 'center',
    },

    title: {
        fontSize: 38,
        fontWeight: '600',

    },

    subTitle: {
        fontSize: 16,
        color: '#5b5a5c',
    },

    text: {
        fontSize: 25,
        padding: 35,
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