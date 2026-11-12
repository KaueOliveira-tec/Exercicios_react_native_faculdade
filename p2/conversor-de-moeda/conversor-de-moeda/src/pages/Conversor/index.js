import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

export default function ConversorMoedas() {
  const [valorReais, setValorReais] = useState('');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const [resultado, setResultado] = useState(null);

  const taxasConversao = {
    USD: 0.20, // 1 BRL = 0.20 USD
    EUR: 0.18, // 1 BRL = 0.18 EUR
    BTC: 0.0000031, // 1 BRL = 0.0000031 BTC
  };

  function converter() {
    Keyboard.dismiss();
    const valor = parseFloat(valorReais);
    if (isNaN(valor) || valor <= 0) {
      alert('Por favor, informe um valor válido em Reais.');
      return;
    }

    const taxa = taxasConversao[moedaDestino];
    const valorConvertido = valor * taxa;

    if (moedaDestino === 'BTC') {
      setResultado(`${valorConvertido.toFixed(7)} BTC`);
    } else if (moedaDestino === 'EUR') {
      setResultado(`€ ${valorConvertido.toFixed(2)}`);
    } else {
      setResultado(`$ ${valorConvertido.toFixed(2)}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>

      <Text style={styles.label}>Valor em Reais (R$):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 100"
        keyboardType="numeric"
        value={valorReais}
        onChangeText={setValorReais}
      />

      <Text style={styles.label}>Converter para:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
          <Picker.Item label="Bitcoin (BTC)" value="BTC" />
        </Picker>
      </View>

      <Pressable style={styles.botao} onPress={converter}>
        <Text style={styles.textoBotao}>Converter</Text>
      </Pressable>

      {resultado && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}