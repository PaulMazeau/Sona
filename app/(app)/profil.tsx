import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router';

const Profil = () => {
    const { logout } = useAuth() || { logout: () => {} };
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.replace('../'); // Redirige vers l'index global
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profil</Text>
            <Button title="Se déconnecter" onPress={handleLogout} />
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

export default Profil;
