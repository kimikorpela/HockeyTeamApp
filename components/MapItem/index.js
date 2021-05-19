import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import MapView, { Marker } from 'react-native-maps';

const MapItem = (props) => {

    return (
        <View style={styles.aContainer}>

            <ImageBackground
                source={require('../../assets/HockeyApp/mainpageIMG.jpg')}
                style={styles.image}
            />

            <View>
                <MapView style={{ minHeight: '100%'}}
                initialRegion={{ 
                    latitude: 60.248003,
                    longitude: 24.862573,
                    latitudeDelta: 0.0322, 
                    longitudeDelta: 0.0221, 
                    }}>
                <Marker
                    coordinate={{ 
                        latitude: 60.248003,
                        longitude: 24.862573 }}
                        title='Maltsu Metropolitans'/>
                </MapView>
            </View>
        </View>
    );
};

export default MapItem;