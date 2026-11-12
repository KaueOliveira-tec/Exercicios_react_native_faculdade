import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from './styles';

export default function Multiplicador() {
  const [primeiroNum, setPrimeiroNum] = useState('');
  const [segundoNum, setSegundoNum] = useState('');
  const [resultado, setResultado] = useState('');

  function Multiplicacao() {
    if (primeiroNum === '' || segundoNum === '') {
      alert('Digite os dois números!');
      return;
    }

    const n1 = parseFloat(primeiroNum);
    const n2 = parseFloat(segundoNum);

    if (!isNaN(n1) && !isNaN(n2)) {
      const calc = n1 * n2;
      setResultado(calc.toString());
    } else {
      setResultado('Inválido');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicador de Números</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro nº"
        keyboardType="numeric"
        onChangeText={setPrimeiroNum}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo nº"
        keyboardType="numeric"
        onChangeText={setSegundoNum}
      />

      <Pressable style={styles.botao} onPress={Multiplicacao}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
}
