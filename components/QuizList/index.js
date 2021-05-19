import React from 'react';
import { View, Text, ImageBackground, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import questions from './questions';
import QuizItem from '../QuizItem';

const QuizList = (props) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={questions}
                renderItem={({ item }) => <QuizItem question={item} />}
            />
        </View>

    );
};

export default QuizList;