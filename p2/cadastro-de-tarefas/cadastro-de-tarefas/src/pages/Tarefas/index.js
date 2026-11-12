import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import api from '../../services/api';
import Card from '../../components/Card';
import { styles } from './styles';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const carregarTarefas = async () => {
    try {
      const response = await api.get('/tasks');
      setTarefas(response.data);
    } catch (error) {
      alert('Erro ao carregar as tarefas da API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  function irFormulario() {
    navigation.navigate('Formulario', { atualizarLista: carregarTarefas });
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#0066CC" size="large" />
        <Text style={styles.textoLoading}>Carregando tarefas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.botaoIncluir} onPress={irFormulario}>
        <Ionicons name="add-circle-outline" size={22} color="#FFF" />
        <Text style={styles.textoBotaoIncluir}>Nova Tarefa</Text>
      </Pressable>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.textoVazio}>Nenhuma tarefa encontrada.</Text>
        }
        renderItem={({ item }) => (
          <Card data={item} funcCarregarTarefas={carregarTarefas} />
        )}
      />
    </View>
  );
}