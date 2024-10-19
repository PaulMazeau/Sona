import React from 'react';
import { Stack } from "expo-router";
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: false, // Désactive les gestes de retour & a voir si ca pause pas soucis plus tard
      }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)/signIn" />
        <Stack.Screen name="(auth)/signUp" options={{ gestureEnabled: false }}/>
      </Stack>
    </AuthProvider>
  );
}
