import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { styles } from './styles';

export default function Form() {
  const navigation = useNavigation();
  const route = useRoute();

  const id = route.params?.id;
  const [title, setTitle] = useState(route.params?.title || '');
  const [description, setDescription] = useState(route.params?.description || '');
  const [salvando, setSalvando] = useState(false);

  async function salvarTarefa() {
    if (!title.trim() || !description.trim()) {
      alert('Preencha o título e a descrição da tarefa.');
      return;
    }

    setSalvando(true);

    try {
      const payload = {
        title: title.trim(),
        description: description.trim(),
      };

      if (id !== undefined) {
        await api.put(`/tasks/${id}`, payload);
      } else {
        await api.post('/tasks', payload);
      }

      if (route.params?.atualizarLista) {
        await route.params.atualizarLista();
      }

      navigation.goBack();
    } catch (error) {
      alert('Erro ao salvar a tarefa na API.');
    } finally {
      setSalvando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}>
        {id !== undefined ? 'Editar Tarefa' : 'Cadastrar Nova Tarefa'}
      </Text>

      <Text style={styles.label}>Título:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar React Native"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Detalhes da tarefa..."
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />

      <Pressable 
        style={[styles.botaoSalvar, salvando && { opacity: 0.7 }]} 
        onPress={salvarTarefa}
        disabled={salvando}
      >
        {salvando ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.textoBotao}>Salvar Tarefa</Text>
        )}
      </Pressable>
    </View>
  );
}