import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import Btc from './src/pages/Btc';

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
              tabBarLabelStyle: { fontWeight: 'bold', fontSize: 13 },
            }}
          >
            <Tab.Screen name="Dólar" component={Dolar} />
            <Tab.Screen name="Euro" component={Euro} />
            <Tab.Screen name="Bitcoin" component={Btc} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}