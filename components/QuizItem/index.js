import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

const QuizItem = (props) => {

    const { question, option1, option2, option3, option4, image } = props.question;

    return (
        <View style={styles.aContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.question}>{question}</Text>
                <Text style={styles.option}>{option1}</Text>
                <Text style={styles.option}>{option2}</Text>
                <Text style={styles.option}>{option3}</Text>
                <Text style={styles.option}>{option4}</Text>
            </View>
        </View>
    );
};

export default QuizItem;