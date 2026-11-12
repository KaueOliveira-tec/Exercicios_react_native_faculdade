import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Keyboard } from 'react-native';
import { styles } from './styles';

export default function Euro() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcular() {
    Keyboard.dismiss();
    const v = parseFloat(valor);
    if (isNaN(v) || v <= 0) {
      alert('Digite um valor válido em Reais!');
      return;
    }
    const res = v * 0.18; 
    setResultado(`€ ${res.toFixed(2)}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Real (R$) ➔ Euro (€)</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor em Reais"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <Pressable style={styles.botao} onPress={calcular}>
        <Text style={styles.textoBotao}>Converter</Text>
      </Pressable>
      {resultado && <Text style={styles.resultado}>Resultado: {resultado}</Text>}
    </View>
  );
}