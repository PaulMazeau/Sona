import React from 'react';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Accueil',
        }}
      />
      <Tabs.Screen
        name="lecon"
        options={{
          tabBarLabel: 'Leçon',
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          tabBarLabel: 'Upload',
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          tabBarLabel: 'Profil',
        }}
      />
    </Tabs>
  );
}

