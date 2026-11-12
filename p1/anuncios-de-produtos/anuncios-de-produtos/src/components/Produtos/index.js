import { Text, View, ScrollView } from 'react-native';
import { Card, Title } from 'react-native-paper';
import React from 'react';
import { styles } from './styles'

export default function AnunciosProdutos() {
  const produtos = [
    {id: 1, texto: 'Nike Air Max Excee', imagem: require('../../../assets/air_max_excee.avif'), preco: 'R$ 799,99'},
    {id: 2, texto: 'Nike Air Max Nuaxis', imagem: require('../../../assets/air_max_nuaxis.avif'), preco: 'R$ 599,99'},
    {id: 3, texto: 'Nike Big Low', imagem: require('../../../assets/big_low.avif'), preco: 'R$ 599,99'},
    {id: 4, texto: 'Nike Revolution 8', imagem: require('../../../assets/revolution_8.avif'), preco: 'R$ 399,99'},
    {id: 5, texto: 'Nike Run Swift 3', imagem: require('../../../assets/run_swift_3.avif'), preco: 'R$ 399,99'}
  ];
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>Anúncios</Text>

      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {produtos.map((item) => (
          <Card key={item.id} style={styles.card} mode="elevated">
            <Card.Cover source={item.imagem} style={styles.fotoProduto} />

            <Card.Content style={styles.conteudoCard}>
              <Title style={styles.textoProduto}>{item.texto}</Title>
              <Text style={styles.textoPreco}>{item.preco}</Text> 
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
