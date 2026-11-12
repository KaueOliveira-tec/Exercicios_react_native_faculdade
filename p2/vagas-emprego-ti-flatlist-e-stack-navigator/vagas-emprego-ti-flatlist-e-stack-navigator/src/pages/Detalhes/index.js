import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';

export default function Detalhes() {
  const navigation = useNavigation();
  const route = useRoute();
  const { vaga } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{vaga.titulo}</Text>
        
        <Text style={styles.infoLabel}>Contratante:</Text>
        <Text style={styles.infoValor}>{vaga.empresa}</Text>

        <Text style={styles.infoLabel}>Remuneração:</Text>
        <Text style={styles.salario}>{vaga.salario}</Text>

        <View style={styles.divisor} />

        <Text style={styles.infoLabel}>Escopo da Vaga:</Text>
        <Text style={styles.descricao}>{vaga.descricao}</Text>

        <Text style={styles.infoLabel}>E-mail de Contato:</Text>
        <Text style={styles.contato}>{vaga.contato}</Text>

        <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}