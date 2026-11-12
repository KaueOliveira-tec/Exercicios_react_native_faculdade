import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import api from '../../services/api';
import { styles } from './styles';

export default function Card({ data, funcCarregarTarefas }) {
  const navigation = useNavigation();

  async function excluirTarefa() {
    try {
      await api.delete(`/tasks/${data.id}`);
      await funcCarregarTarefas();
    } catch (error) {
      alert('Não foi possível excluir a tarefa.');
    }
  }

  function confirmarExclusao() {
    Alert.alert(
      'Excluir Tarefa',
      `Deseja realmente remover "${data.title}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: excluirTarefa },
      ]
    );
  }

  function irFormulario() {
    navigation.navigate('Formulario', {
      id: data.id,
      title: data.title,
      description: data.description,
      atualizarLista: funcCarregarTarefas,
    });
  }

  return (
    <View style={styles.card}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{data.title}</Text>
        <Text style={styles.descricao}>{data.description}</Text>
      </View>

      <View style={styles.acoes}>
        <Pressable style={styles.botaoEditar} onPress={irFormulario}>
          <Ionicons name="create-outline" size={18} color="#FFF" />
          <Text style={styles.textoBotao}>Editar</Text>
        </Pressable>

        <Pressable style={styles.botaoExcluir} onPress={confirmarExclusao}>
          <Ionicons name="trash-outline" size={18} color="#FFF" />
          <Text style={styles.textoBotao}>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );
}