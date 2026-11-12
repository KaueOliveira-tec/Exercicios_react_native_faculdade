import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const FRASES = [
  { texto: '"A única maneira de fazer um excelente trabalho é amar o que você faz."', autor: '- Steve Jobs' },
  { texto: '"O sucesso é a soma de pequenos esforços repetidos dia após dia."', autor: '- Robert Collier' },
  { texto: '"Acredite que você pode e você já está no meio do caminho."', autor: '- Theodore Roosevelt' },
  { texto: '"Não espere por oportunidades, crie-as."', autor: '- George Bernard Shaw' },
  { texto: '"O futuro pertence àqueles que acreditam na beleza de seus sonhos."', autor: '- Eleanor Roosevelt' },
  { texto: '"A persistência é o caminho do êxito."', autor: '- Charles Chaplin' },
  { texto: '"Você não precisa ser grande para começar, mas precisa começar para ser grande."', autor: '- Zig Ziglar' },
  { texto: '"Sempre parece impossível até que seja feito."', autor: '- Nelson Mandela' },
];

export default function Home() {
  const [tamanhoGrande, setTamanhoGrande] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(false);
  const [indiceFrase, setIndiceFrase] = useState(0);

  useEffect(() => {
    carregarPreferencias();
  }, []);

  async function carregarPreferencias() {
    try {
      const storedTamanho = await AsyncStorage.getItem('@pref_tamanho');
      const storedTema = await AsyncStorage.getItem('@pref_tema');

      if (storedTamanho !== null) setTamanhoGrande(JSON.parse(storedTamanho));
      if (storedTema !== null) setModoEscuro(JSON.parse(storedTema));
    } catch (e) {
      console.log('Erro ao carregar preferências:', e);
    }
  }

  async function salvarPreferencias(tamanhoVal, temaVal) {
    try {
      await AsyncStorage.setItem('@pref_tamanho', JSON.stringify(tamanhoVal));
      await AsyncStorage.setItem('@pref_tema', JSON.stringify(temaVal));
    } catch (e) {
      console.log('Erro ao salvar preferências:', e);
    }
  }

  function toggleTamanho(value) {
    setTamanhoGrande(value);
    salvarPreferencias(value, modoEscuro);
  }

  function toggleTema(value) {
    setModoEscuro(value);
    salvarPreferencias(tamanhoGrande, value);
  }

  function gerarNovaFrase() {
    let novoIndice;
    do {
      novoIndice = Math.floor(Math.random() * FRASES.length);
    } while (novoIndice === indiceFrase && FRASES.length > 1);
    
    setIndiceFrase(novoIndice);
  }

  const temaContainerStyle = modoEscuro ? styles.containerDark : styles.containerLight;
  const temaTextoStyle = modoEscuro ? styles.textoDark : styles.textoLight;
  const fraseTamanhoStyle = tamanhoGrande ? styles.fraseGrande : styles.frasePequena;

  const fraseAtual = FRASES[indiceFrase];

  return (
    <View style={[styles.container, temaContainerStyle]}>
      <Text style={[styles.titulo, temaTextoStyle]}>Frases Motivacionais</Text>

      <View style={styles.configBox}>
        <View style={styles.row}>
          <Text style={[styles.label, temaTextoStyle]}>Tamanho Grande:</Text>
          <Switch value={tamanhoGrande} onValueChange={toggleTamanho} />
        </View>

        <View style={styles.row}>
          <Text style={[styles.label, temaTextoStyle]}>Modo Noturno:</Text>
          <Switch value={modoEscuro} onValueChange={toggleTema} />
        </View>
      </View>

      <View style={styles.fraseBox}>
        <Text style={[styles.frase, temaTextoStyle, fraseTamanhoStyle]}>
          {fraseAtual.texto}
        </Text>
        <Text style={[styles.autor, temaTextoStyle]}>{fraseAtual.autor}</Text>
      </View>

      <Pressable style={styles.botaoNovaFrase} onPress={gerarNovaFrase}>
        <Text style={styles.textoBotao}>Nova Frase</Text>
      </Pressable>
    </View>
  );
}