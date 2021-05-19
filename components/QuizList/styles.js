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

    question: {
        fontSize: 30,
        fontWeight: '600',
        
    },

    option: {
        fontSize: 20,
        color: '#5b5a5c',
    },

    buttonsContainer: {
        position: 'absolute',
        top: 225,
        width: '100%',
    },
});

export default styles;