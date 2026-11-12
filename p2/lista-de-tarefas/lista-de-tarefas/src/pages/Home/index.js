import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, FlatList, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';

export default function Home() {
  const [tarefaInput, setTarefaInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  async function carregarTarefas() {
    try {
      const dados = await AsyncStorage.getItem('@app21_tarefas');
      if (dados !== null) {
        setTarefas(JSON.parse(dados));
      }
    } catch (error) {
      console.log('Erro ao carregar tarefas:', error);
    }
  }

  async function salvarNoStorage(novaLista) {
    try {
      await AsyncStorage.setItem('@app21_tarefas', JSON.stringify(novaLista));
    } catch (error) {
      console.log('Erro ao salvar tarefas:', error);
    }
  }

  function adicionarTarefa() {
    if (!tarefaInput.trim()) {
      alert('Digite uma tarefa antes de adicionar.');
      return;
    }

    const novaTarefa = {
      id: Date.now().toString(),
      nome: tarefaInput.trim(),
    };

    const novaLista = [...tarefas, novaTarefa];
    setTarefas(novaLista);
    salvarNoStorage(novaLista);
    setTarefaInput('');
    Keyboard.dismiss();
  }

  function excluirTarefa(id) {
    const novaLista = tarefas.filter((item) => item.id !== id);
    setTarefas(novaLista);
    salvarNoStorage(novaLista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          value={tarefaInput}
          onChangeText={setTarefaInput}
        />
        <Pressable style={styles.botaoAdicionar} onPress={adicionarTarefa}>
          <Ionicons name="add" size={26} color="#FFF" />
        </Pressable>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.textoVazio}>Nenhuma tarefa cadastrada.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.cardTarefa}>
            <Text style={styles.textoTarefa}>{item.nome}</Text>
            <Pressable onPress={() => excluirTarefa(item.id)}>
              <Ionicons name="trash-outline" size={22} color="#D32F2F" />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}