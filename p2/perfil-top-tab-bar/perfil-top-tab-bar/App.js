import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#0066CC',
              tabBarInactiveTintColor: 'gray',
              tabBarIndicatorStyle: { backgroundColor: '#0066CC' },
              tabBarLabelStyle: { fontWeight: 'bold' },
            }}
          >
            <Tab.Screen name="Pessoal" component={Pessoal} />
            <Tab.Screen name="Formação" component={Formacao} />
            <Tab.Screen name="Experiência" component={Experiencia} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}