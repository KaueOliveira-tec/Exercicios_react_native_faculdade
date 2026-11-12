import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import Btc from './src/pages/Btc';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Real -> Dólar') iconName = 'dollar-sign';
              else if (route.name === 'Real -> Euro') iconName = 'euro-sign';
              else if (route.name === 'Real -> Bitcoin') iconName = 'bitcoin';
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2E7D32',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Real -> Dólar" component={Dolar} />
          <Tab.Screen name="Real -> Euro" component={Euro} />
          <Tab.Screen name="Real -> Bitcoin" component={Btc} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}