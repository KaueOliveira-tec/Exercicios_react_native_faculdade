import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, FlatList, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';

export default function Home() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [listaCompras, setListaCompras] = useState([]);

  useEffect(() => {
    carregarLista();
  }, []);

  async function carregarLista() {
    try {
      const dados = await AsyncStorage.getItem('@app22_compras');
      if (dados !== null) {
        setListaCompras(JSON.parse(dados));
      }
    } catch (error) {
      console.log('Erro ao carregar lista de compras:', error);
    }
  }

  async function salvarLista(novaLista) {
    try {
      await AsyncStorage.setItem('@app22_compras', JSON.stringify(novaLista));
    } catch (error) {
      console.log('Erro ao salvar lista de compras:', error);
    }
  }

  function adicionarItem() {
    if (!produto.trim() || !quantidade.trim()) {
      alert('Informe o nome do produto e a quantidade.');
      return;
    }

    const novoItem = {
      id: Date.now().toString(),
      produto: produto.trim(),
      quantidade: quantidade.trim(),
    };

    const novaLista = [...listaCompras, novoItem];
    setListaCompras(novaLista);
    salvarLista(novaLista);
    setProduto('');
    setQuantidade('');
    Keyboard.dismiss();
  }

  function removerItem(id) {
    const novaLista = listaCompras.filter((item) => item.id !== id);
    setListaCompras(novaLista);
    salvarLista(novaLista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.formRow}>
        <TextInput
          style={styles.inputProduto}
          placeholder="Produto (Ex: Arroz)"
          value={produto}
          onChangeText={setProduto}
        />
        <TextInput
          style={styles.inputQtd}
          placeholder="Qtd"
          value={quantidade}
          onChangeText={setQuantidade}
        />
        <Pressable style={styles.botaoAdicionar} onPress={adicionarItem}>
          <Ionicons name="cart-outline" size={24} color="#FFF" />
        </Pressable>
      </View>

      <FlatList
        data={listaCompras}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.textoVazio}>Sua lista de compras está vazia.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <View>
              <Text style={styles.nomeProduto}>{item.produto}</Text>
              <Text style={styles.qtdProduto}>Quantidade: {item.quantidade}</Text>
            </View>
            <Pressable onPress={() => removerItem(item.id)}>
              <Ionicons name="trash-outline" size={22} color="#D32F2F" />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}