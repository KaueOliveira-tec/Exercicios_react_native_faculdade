import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Pessoal') iconName = 'person';
              else if (route.name === 'Formação') iconName = 'school';
              else if (route.name === 'Experiência') iconName = 'briefcase';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#0066CC',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Pessoal" component={Pessoal} />
          <Tab.Screen name="Formação" component={Formacao} />
          <Tab.Screen name="Experiência" component={Experiencia} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}