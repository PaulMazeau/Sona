import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LeconCard from '../../components/LeconCard';

const Lecon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Leçon</Text>
      <LeconCard />
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

export default Lecon;
