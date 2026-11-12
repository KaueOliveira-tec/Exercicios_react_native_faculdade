import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Tarefas from './src/pages/Tarefas';
import Form from './src/pages/Form';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tarefas"
          screenOptions={{
            headerStyle: { backgroundColor: '#1E293B' },
            headerTintColor: '#FFF',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen 
            name="Tarefas" 
            component={Tarefas} 
            options={{ title: 'Gerenciador de Tarefas' }} 
          />
          <Stack.Screen 
            name="Formulario" 
            component={Form} 
            options={{ title: 'Dados da Tarefa' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}