import React from 'react';
import { View, Text, ImageBackground, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import players from './players';
import PlayersItem from '../PlayersItem';

const PlayerList = (props) => {

    return (
        <View style={styles.container}>
            <FlatList 
                data={players}
                renderItem={({item}) => <PlayersItem player={item} />}
            />
        </View>

    );
};

export default PlayerList;