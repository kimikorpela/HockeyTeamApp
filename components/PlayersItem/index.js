import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

const PlayersItem = (props) => {

    const { name, desc, number, image } = props.player;

    return (
        <View style={styles.aContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.playerName}>{name}</Text>
                <Text style={styles.playerNumber}>#{number}</Text>
                <Text style={styles.playerDesc}>{desc}</Text>
            </View>
        </View>
    );
};

export default PlayersItem;