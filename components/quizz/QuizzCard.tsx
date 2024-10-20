import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuizzQuestion from './QuizzQuestion';
import QuizzAnswerStack from './QuizzAnswerStack';
import { Colors } from '@/constants/Colors';

const QuizzCard = () => {
    return (
        <View style={styles.card}>
            <QuizzQuestion/>
            <QuizzAnswerStack/>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: Colors.background,
        width: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginVertical: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
    },
});

export default QuizzCard;

