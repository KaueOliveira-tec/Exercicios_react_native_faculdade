import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Formulario from './src/pages/Formulario';
import ExibeDados from './src/pages/ExibeDados';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulario">
        <Stack.Screen 
          name="Formulario" 
          component={Formulario} 
          options={{ title: 'Abertura de Conta' }} 
        />
        <Stack.Screen 
          name="ExibeDados" 
          component={ExibeDados} 
          options={{ title: 'Dados Cadastrados' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}