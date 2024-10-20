import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuizzAnswer = () => {
    return (
        <View style={styles.card}>
           <Text>Ceci est une réponse </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 16,
        width: '95%',
        marginHorizontal: "2.5%",
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

export default QuizzAnswer;

