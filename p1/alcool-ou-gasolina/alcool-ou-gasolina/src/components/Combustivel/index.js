import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import CombustivelImg from '../../../assets/posto-de-gasolina-combustivel-bomba.png';
import { styles } from './styles';

export default function EscolheCombustivel() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [verificarPreco, setVerificarPreco] = useState('');
  const [resultadoVerificacao, setResultadoVerificacao] = useState('');

  function Combustivel() {
    if (precoAlcool === '' || precoGasolina === '') {
      alert('Informe os preços dos combustíveis!');
      return;
    }

    const p1 = parseFloat(precoAlcool);
    const p2 = parseFloat(precoGasolina);
    const calcPreco = p1 / p2;

    if (!isNaN(p1) && !isNaN(p2)) {
      setVerificarPreco(calcPreco.toString());
    } else {
      setVerificarPreco('Inválido');
    }

    if (verificarPreco < 0.7) {
      setResultadoVerificacao('Etanol é mais viável para abastecer!');
    } else {
      setResultadoVerificacao('Gasolina é mais viável para abastecer!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      <Image source={CombustivelImg} style={styles.img} />

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool"
        keyboardType="numeric"
        onChangeText={setPrecoAlcool}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina"
        keyboardType="numeric"
        onChangeText={setPrecoGasolina}
      />

      <Pressable style={styles.botao} onPress={Combustivel}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </Pressable>

      <Text style={styles.resultado}>Resultado: {resultadoVerificacao}</Text>
    </View>
  );
}
