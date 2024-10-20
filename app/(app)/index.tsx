import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import QuizzCard from '../../components/quizz/QuizzCard';

const Index = () => {
  const { user } = useAuth() || { user: null };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Vous devez être connecté pour accéder à cette page.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <QuizzCard/>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default Index;
