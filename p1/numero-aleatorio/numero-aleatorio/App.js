import { View } from 'react-native';
import React from 'react';
import NumAleatorio from './src/components/NumAleatorio/index';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NumAleatorio />
    </View>
  );
}