import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

export default function Home() {
  const [valorReais, setValorReais] = useState('');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const [resultado, setResultado] = useState(null);
  const [cotacaoAtual, setCotacaoAtual] = useState(null);
  const [fonteApi, setFonteApi] = useState('');
  const [loading, setLoading] = useState(false);

  async function converterMoeda() {
    Keyboard.dismiss();
    const valor = parseFloat(valorReais.replace(',', '.'));

    if (isNaN(valor) || valor <= 0) {
      alert('Digite um valor válido em Reais (R$).');
      return;
    }

    setLoading(true);
    setResultado(null);

    try {
      let valorCotacaoBRL = null;

      // 1. Tenta buscar na AwesomeAPI (conforme pedido no exercício)
      const parMoeda = `${moedaDestino}-BRL`;
      const chaveObjeto = `${moedaDestino}BRL`;
      const respAwesome = await fetch(`https://economia.awesomeapi.com.br/json/last/${parMoeda}`);

      if (respAwesome.ok) {
        const dadosAwesome = await respAwesome.json();
        if (dadosAwesome[chaveObjeto]?.ask) {
          valorCotacaoBRL = parseFloat(dadosAwesome[chaveObjeto].ask);
          setFonteApi('AwesomeAPI');
        }
      }

      // 2. Fallback automático caso a AwesomeAPI bloqueie o IP do Snack (Erro 429/401)
      if (!valorCotacaoBRL) {
        const respFallback = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=BRL');
        if (!respFallback.ok) {
          throw new Error(`Falha nas APIs (Status: ${respAwesome.status})`);
        }
        const dadosFallback = await respFallback.json();
        const taxaInversa = parseFloat(dadosFallback.data.rates[moedaDestino]);
        valorCotacaoBRL = 1 / taxaInversa;
        setFonteApi('Coinbase API (Fallback)');
      }

      const convertido = valor / valorCotacaoBRL;
      setCotacaoAtual(valorCotacaoBRL);

      if (moedaDestino === 'BTC') {
        setResultado(`${convertido.toFixed(8)} BTC`);
      } else if (moedaDestino === 'EUR') {
        setResultado(`€ ${convertido.toFixed(2)}`);
      } else {
        setResultado(`$ ${convertido.toFixed(2)}`);
      }
    } catch (error) {
      alert(`Erro ao converter: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas (API)</Text>

      <Text style={styles.label}>Valor em Reais (R$):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 100"
        keyboardType="numeric"
        value={valorReais}
        onChangeText={setValorReais}
      />

      <Text style={styles.label}>Converter para:</Text>
      <View style={styles.pickerBox}>
        <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Dólar Americano (USD)" value="USD" />
          <Picker.Item label="Euro (EUR)" value="EUR" />
          <Picker.Item label="Bitcoin (BTC)" value="BTC" />
        </Picker>
      </View>

      <Pressable style={styles.botao} onPress={converterMoeda}>
        <Text style={styles.textoBotao}>Converter</Text>
      </Pressable>

      {loading && <ActivityIndicator size="large" color="#0066CC" style={{ marginTop: 20 }} />}

      {resultado && (
        <View style={styles.cardResultado}>
          <Text style={styles.textoCotacao}>
            Cotação ({moedaDestino}): R$ {cotacaoAtual.toFixed(2)}
          </Text>
          <Text style={styles.textoResultado}>{resultado}</Text>
          <Text style={{ fontSize: 12, color: '#888', marginTop: 6 }}>
            Fonte: {fonteApi}
          </Text>
        </View>
      )}
    </View>
  );
}