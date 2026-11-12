import React from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';


export default function Home() {
  const navigation = useNavigation();

  const produtos = [
    {
      id: '1',
      titulo: 'Console PlayStation 5',
      preco: 'R$ 3.800,00',
      descricao: 'Console PS5 Edição Digital com 825GB de SSD, controle DualSense e cabo HDMI 2.1.',
      vendedor: 'TechStore SP',
      imagem: require('../../../assets/ps5.jpg')
    },
    {
      id: '2',
      titulo: 'Smart TV 55" 4K OLED',
      preco: 'R$ 4.999,00',
      descricao: 'Smart TV com painel OLED 120Hz, Dolby Vision, HDR10+ e inteligência artificial integrada.',
      vendedor: 'Eletro Mega',
      imagem: require('../../../assets/tv.jpg')
    },
    {
      id: '3',
      titulo: 'Cadeira Gamer Ergonômica',
      preco: 'R$ 1.150,00',
      descricao: 'Cadeira com regulagem de altura, apoio de braço 3D e inclinação até 180 graus.',
      vendedor: 'Office & Play',
      imagem: require('../../../assets/cadeira_gamer.jpg')
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cabecalho}>Produtos em Oferta</Text>

      {produtos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.imagem} style={styles.imagemItem} />
          <Text style={styles.tituloItem}>{item.titulo}</Text>
          
          <Pressable 
            style={styles.botaoDetalhes} 
            onPress={() => navigation.navigate('Detalhes', { produto: item })}
          >
            <Text style={styles.textoBotao}>Ver detalhes</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}