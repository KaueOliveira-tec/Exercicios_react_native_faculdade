import React from 'react';
import EscolheCombustivel from './src/components/Combustivel/index';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <EscolheCombustivel />
    </View>
  );
}
