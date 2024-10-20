import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeconCard = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Lecon 1</Text>
            <Text style={styles.description}>Description de la lecon 1</Text>
            <View style={styles.footer}>
                <View style={styles.column}>
                    <Text style={styles.footerText}>Quizz: 10</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.footerText}>Score moyen: 10</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.footerText}>Dernière note: 10</Text>
                </View>
            </View>
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

export default LeconCard;

