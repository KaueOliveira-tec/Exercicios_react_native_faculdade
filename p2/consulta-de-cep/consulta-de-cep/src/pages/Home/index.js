import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import api from '../../services/api';
import { styles } from './styles';

export default function Home() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(false);

  async function buscarCep() {
    Keyboard.dismiss();
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      alert('Digite um CEP válido com 8 dígitos.');
      return;
    }

    setLoading(true);
    setEndereco(null);

    try {
      const response = await api.get(`${cepLimpo}/json/`);
      if (response.data.erro) {
        alert('CEP não encontrado.');
      } else {
        setEndereco(response.data);
      }
    } catch (error) {
      alert('Erro ao consultar o CEP. Verifique sua conexão.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulta de CEP</Text>

      <View style={styles.buscaRow}>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP (ex: 11010000)"
          keyboardType="numeric"
          maxLength={8}
          value={cep}
          onChangeText={setCep}
        />
        <Pressable style={styles.botaoBuscar} onPress={buscarCep}>
          <Ionicons name="search" size={24} color="#FFF" />
        </Pressable>
      </View>

      {loading && <ActivityIndicator size="large" color="#0066CC" style={{ marginTop: 20 }} />}

      {endereco && (
        <View style={styles.cardResultado}>
          <Text style={styles.item}>CEP: <Text style={styles.valor}>{endereco.cep}</Text></Text>
          <Text style={styles.item}>Logradouro: <Text style={styles.valor}>{endereco.logradouro || 'N/A'}</Text></Text>
          <Text style={styles.item}>Bairro: <Text style={styles.valor}>{endereco.bairro || 'N/A'}</Text></Text>
          <Text style={styles.item}>Cidade: <Text style={styles.valor}>{endereco.localidade}</Text></Text>
          <Text style={styles.item}>Estado: <Text style={styles.valor}>{endereco.uf}</Text></Text>
        </View>
      )}
    </View>
  );
}