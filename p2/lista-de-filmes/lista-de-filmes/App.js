import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/pages/Home';
import Detalhes from './src/pages/Detalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ title: 'Catálogo de Filmes' }} 
          />
          <Stack.Screen 
            name="Detalhes" 
            component={Detalhes} 
            options={{ title: 'Sinopse do Filme' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}