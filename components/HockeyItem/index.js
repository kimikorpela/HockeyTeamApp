import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const HockeyItem = (props) => {

    return (
        <View style={styles.aContainer}>

            <ImageBackground
                source={require('../../assets/HockeyApp/mainpageIMG.jpg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Maltsu Metropolitans</Text>
                <Text style={styles.subTitle}>Hockey Team from Helsinki</Text>
                <Text style={styles.text}>Welcome to the home of the Metropolitans! Here you can see who plays in the team, where do we play and also take a little quiz on the team players!</Text>
            </View>
        </View>
    );
};

export default HockeyItem;