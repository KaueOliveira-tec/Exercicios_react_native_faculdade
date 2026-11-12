import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';

export default function Detalhes() {
  const navigation = useNavigation();
  const route = useRoute();
  const { filme } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: filme.foto }} style={styles.capaGrande} />
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{filme.nome}</Text>
        <Text style={styles.labelSinopse}>Sinopse:</Text>
        <Text style={styles.sinopse}>{filme.sinopse}</Text>

        <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}