import { Text, View, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import oPensador from '../../../assets/o_pensador.jpg';

export default function NumAleatorio() {
  const [num, setNum] = useState('');
  
  function descobrirNum() {
    const numSorteado = Math.floor(Math.random() * 11);
    setNum(numSorteado.toString());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>Jogo do Nº Aleatório</Text>

      <Image source={oPensador} style={styles.imagem} />

      <Text style={styles.textoInstrucao}>Pense em um número de 0 a 10</Text>

      <Text style={styles.textoResultado}>{num}</Text>

      <Pressable style={styles.botao} onPress={descobrirNum}>
        <Text style={styles.textoBotao}>Descobrir</Text>
      </Pressable>
    </View>
  );
}
