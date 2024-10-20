import React from 'react';
import { Tabs } from 'expo-router';
import HomeIcon from '../../assets/icons/HomeIcon';
import LessonIcon from '../../assets/icons/LeconIcon';
import UploadIcon from '../../assets/icons/UploadIcon';
import ProfileIcon from '../../assets/icons/UserIcon';
import { Colors } from '@/constants/Colors';

const AppLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ focused }) => (
            <HomeIcon width={24} height={24} stroke={focused ? Colors.primary : Colors.icon} />
          ),
        }}
      />
      <Tabs.Screen
        name="lecon"
        options={{
          tabBarLabel: 'Leçon',
          tabBarIcon: ({ focused }) => (
            <LessonIcon width={24} height={24} stroke={focused ? Colors.primary : Colors.icon} />
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          tabBarLabel: 'Upload',
          tabBarIcon: ({ focused }) => (
            <UploadIcon width={24} height={24} stroke={focused ? Colors.primary : Colors.icon} />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ focused }) => (
            <ProfileIcon width={24} height={24} stroke={focused ? Colors.primary : Colors.icon} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
