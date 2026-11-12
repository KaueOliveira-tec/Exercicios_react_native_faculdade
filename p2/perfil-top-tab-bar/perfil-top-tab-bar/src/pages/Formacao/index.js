import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formação Acadêmica</Text>
      
      <View style={styles.card}>
        <Text style={styles.curso}>Sistemas para Internet</Text>
        <Text style={styles.instituicao}>FATEC Rubens Lara</Text>
        <Text style={styles.status}>Cursando - Graduação Tecnológica</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.curso}>Ensino Médio</Text>
        <Text style={styles.instituicao}>E.E. Martim Afonso</Text>
        <Text style={styles.status}>Concluído</Text>
      </View>
    </View>
  );
}