import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Detalhes from './src/pages/Detalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Oportunidades em TI' }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{ title: 'Detalhes da Vaga' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}