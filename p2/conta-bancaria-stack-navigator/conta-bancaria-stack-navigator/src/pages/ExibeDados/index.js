import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';

export default function ExibeDados() {
  const navigation = useNavigation();
  const route = useRoute();
  const { nome, idade, sexo, escolaridade, limite, brasileiro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados Informados</Text>

      <View style={styles.card}>
        <Text style={styles.dado}>Nome: <Text style={styles.valor}>{nome}</Text></Text>
        <Text style={styles.dado}>Idade: <Text style={styles.valor}>{idade} anos</Text></Text>
        <Text style={styles.dado}>Sexo: <Text style={styles.valor}>{sexo}</Text></Text>
        <Text style={styles.dado}>Escolaridade: <Text style={styles.valor}>{escolaridade}</Text></Text>
        <Text style={styles.dado}>Limite: <Text style={styles.valor}>R$ {limite.toFixed(2)}</Text></Text>
        <Text style={styles.dado}>Nacionalidade: <Text style={styles.valor}>{brasileiro ? 'Brasileiro(a)' : 'Estrangeiro(a)'}</Text></Text>
      </View>

      <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}