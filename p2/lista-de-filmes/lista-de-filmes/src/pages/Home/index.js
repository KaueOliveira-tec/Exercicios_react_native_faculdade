import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation();
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const response = await api.get('r-api/?api=filmes');
        setFilmes(response.data);
      } catch (error) {
        alert('Erro ao carregar lista de filmes.');
      } finally {
        setLoading(false);
      }
    }
    carregarFilmes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.topoCard}>
              <Text style={styles.tituloFilme}>{item.nome}</Text>
              <Pressable
                style={styles.botaoLeiaMais}
                onPress={() =>
                  navigation.navigate('Detalhes', { filme: item })
                }>
                <Text style={styles.textoBotao}>Leia mais</Text>
              </Pressable>
            </View>
            <Image source={{ uri: item.foto }} style={styles.capa} />
          </View>
        )}
      />
    </View>
  );
}
