import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HockeyItem from './components/HockeyItem';
import PlayerList from './components/PlayerList';
import QuizList from './components/QuizList';
import MapItem from './components/MapItem';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HockeyItem />
    </View>
  );
}

function PlayersScreen() {
  return (
    <View style={styles.container}>
      <PlayerList />
    </View>
  );
}

function QuizScreen() {
  return (
    <View style={styles.container}>
      <QuizList />
    </View>
  );
}

function MapScreen() {
  return (
    <View style={styles.container}>
      <MapItem />
    </View>
  )
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'md-home';
    } else if (route.name === 'Players') {
      iconName = 'md-people';
    } else if (route.name === 'Quiz') {
      iconName = 'md-help-outline';
    } else if (route.name === 'Map') {
      iconName = 'md-navigate-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Players" component={PlayersScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
