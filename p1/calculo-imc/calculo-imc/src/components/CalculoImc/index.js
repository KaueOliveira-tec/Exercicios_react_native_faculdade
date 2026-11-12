import { Text, View, Image, Pressable, TextInput } from 'react-native';
import ImcImg from '../../../assets/imc.jpg';
import { styles } from './styles';
import React, { useState } from 'react';

export default function AssetExample() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [classificacao, setClassificacao] = useState('');

  function Imc() {
    if (peso === '' || altura === '') {
      alert('Informe o peso e a altura para calculcar o IMC!');
      return;
    }

    const p = parseFloat(peso);
    const a = parseFloat(altura);
    const calcImc = p / (a * a);

    if (!isNaN(p) && !isNaN(a)) {
      setClassificacao(calcImc.toString());
    } else {
      setClassificacao('Inválido');
    }

    if (calcImc < 18.5) {
      setClassificacao('Abaixo do Peso');
    } else if (calcImc >= 18.5 && calcImc <= 24.9) {
      setClassificacao('Peso Normal');
    } else if (calcImc >= 25 && calcImc <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (calcImc >= 30 && calcImc <= 34.9) {
      setClassificacao('Obesidade Grau I');
    } else if (calcImc >= 35 && calcImc <= 39.9) {
      setClassificacao('Obesidade Grau II');
    } else if (calcImc >= 40) {
      setClassificacao('Obesidade Grau III ou Mórbida');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo de IMC</Text>

      <Image source={ImcImg} style={styles.img} />

      <TextInput 
        style={styles.input}
        placeholder="Peso"
        keyboardType="numeric"
        onChangeText={setPeso}
      />

      <TextInput 
        style={styles.input}
        placeholder="Altura"
        keyboardType="numeric"
        onChangeText={setAltura}
      />

      <Pressable style={styles.botao} onPress={Imc}>
        <Text style={styles.textBotao}>Verificar</Text>
      </Pressable>

      <Text style={styles.estagio}>Classificação: {classificacao} </Text>
    </View>
  )
}
