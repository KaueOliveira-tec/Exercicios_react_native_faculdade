import { View } from 'react-native';
import Imc from './src/components/CalculoImc/index';
import React from 'react';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Imc />      
    </View>
  );
}
