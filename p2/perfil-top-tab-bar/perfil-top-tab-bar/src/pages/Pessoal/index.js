import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import fotoPerfil from '../../../assets/foto_Kaue.jpg'
export default function Pessoal() {
  return (
    <View style={styles.container}>
      <Image 
        source={fotoPerfil} 
        style={styles.foto} 
      />
      <Text style={styles.nome}>Kauê de Oliveira Martins</Text>
      <Text style={styles.subtitulo}>Desenvolvedor Frontend</Text>
      
      <View style={styles.card}>
        <Text style={styles.info}>Idade: 21 anos</Text>
        <Text style={styles.info}>Localização: São Vicente - SP</Text>
        <Text style={styles.info}>E-mail: kaueomartins2.0@email.com</Text>
      </View>
    </View>
  );
}