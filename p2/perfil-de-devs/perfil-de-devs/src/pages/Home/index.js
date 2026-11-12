import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Image, ActivityIndicator, ScrollView, Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import api from '../../services/api';
import { styles } from './styles';

export default function Home() {
  const [login, setLogin] = useState('');
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(false);

  async function buscarDev() {
    Keyboard.dismiss();
    if (!login.trim()) {
      alert('Digite o login do GitHub.');
      return;
    }

    setLoading(true);
    setPerfil(null);

    try {
      const response = await api.get(login.trim());
      setPerfil(response.data);
    } catch (error) {
      alert('Usuário não encontrado no GitHub.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Perfil de Devs (GitHub)</Text>

      <View style={styles.buscaRow}>
        <TextInput
          style={styles.input}
          placeholder="Digite o login do GitHub..."
          autoCapitalize="none"
          value={login}
          onChangeText={setLogin}
        />
        <Pressable style={styles.botaoBuscar} onPress={buscarDev}>
          <Ionicons name="search" size={24} color="#FFF" />
        </Pressable>
      </View>

      {loading && <ActivityIndicator size="large" color="#24292E" style={{ marginTop: 20 }} />}

      {perfil && (
        <View style={styles.cardPerfil}>
          <Image source={{ uri: perfil.avatar_url }} style={styles.avatar} />

          <Text style={styles.item}>ID: <Text style={styles.valor}>{perfil.id}</Text></Text>
          <Text style={styles.item}>Nome: <Text style={styles.valor}>{perfil.name || perfil.login}</Text></Text>
          <Text style={styles.item}>Repositórios: <Text style={styles.valor}>{perfil.public_repos}</Text></Text>
          <Text style={styles.item}>Criado em: <Text style={styles.valor}>{new Date(perfil.created_at).toLocaleDateString('pt-BR')}</Text></Text>
          <Text style={styles.item}>Seguidores: <Text style={styles.valor}>{perfil.followers}</Text></Text>
          <Text style={styles.item}>Seguindo: <Text style={styles.valor}>{perfil.following}</Text></Text>
        </View>
      )}
    </ScrollView>
  );
}