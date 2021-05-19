import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    aContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    titles: {
        marginTop: '25%',
        width: '100%',
        padding: 20,
    },

    question: {
        fontSize: 30,
        fontWeight: '600',
        backgroundColor: 'white',
        borderRadius: 10
    },

    option: {
        fontSize: 30,
        color: '#5b5a5c',
        backgroundColor: 'black',
        color: 'white', 
        borderRadius: 10,
        margin: 10
    },

    buttonsContainer: {
        position: 'absolute',
        top: 225,
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    }
});

export default styles;