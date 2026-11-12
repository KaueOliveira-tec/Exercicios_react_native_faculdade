import React from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';

export default function Detalhes() {
  const navigation = useNavigation();
  const route = useRoute();
  const { produto } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardDetalhes}>
        <Image source={{ uri: produto.imagem }} style={styles.imagemDetalhe} />
        
        <Text style={styles.titulo}>{produto.titulo}</Text>
        <Text style={styles.preco}>{produto.preco}</Text>
        
        <View style={styles.divisor} />
        
        <Text style={styles.labelDescricao}>Descrição do Produto:</Text>
        <Text style={styles.descricao}>{produto.descricao}</Text>

        <Text style={styles.vendedor}>Vendido por: <Text style={styles.destaqueVendedor}>{produto.vendedor}</Text></Text>

        <Pressable style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>Voltar para Lista</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}