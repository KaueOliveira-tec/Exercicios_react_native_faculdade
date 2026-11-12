import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Pressable, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Slider } from '@react-native-assets/slider';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Formulario() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Médio Completo');
  const [limite, setLimite] = useState(500);
  const [brasileiro, setBrasileiro] = useState(true);

  function confirmar() {
    if (!nome.trim() || !idade.trim()) {
      alert('Por favor, preencha Nome e Idade!');
      return;
    }

    navigation.navigate('ExibeDados', {
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      brasileiro,
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Formulário de Cadastro</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Seu nome" />

      <Text style={styles.label}>Idade:</Text>
      <TextInput style={styles.input} value={idade} onChangeText={setIdade} keyboardType="numeric" placeholder="Sua idade" />

      <Text style={styles.label}>Sexo:</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={sexo} onValueChange={setSexo}>
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Outro" value="Outro" />
        </Picker>
      </View>

      <Text style={styles.label}>Escolaridade:</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={escolaridade} onValueChange={setEscolaridade}>
          <Picker.Item label="Ensino Médio Incompleto" value="Ensino Médio Incompleto" />
          <Picker.Item label="Ensino Médio Completo" value="Ensino Médio Completo" />
          <Picker.Item label="Superior Incompleto" value="Superior Incompleto" />
          <Picker.Item label="Superior Completo" value="Superior Completo" />
        </Picker>
      </View>

      <Text style={styles.label}>Limite na Conta: R$ {limite.toFixed(0)}</Text>
      <Slider
        value={limite}
        minimumValue={100}
        maximumValue={5000}
        step={50}
        onValueChange={(val) => setLimite(val)}
        minimumTrackTintColor="#0066CC"
        maximumTrackTintColor="#DDD"
        thumbTintColor="#0066CC"
      />

      <View style={styles.switchRow}>
        <Text style={styles.label}>Brasileiro:</Text>
        <Switch value={brasileiro} onValueChange={setBrasileiro} />
      </View>

      <Pressable style={styles.botao} onPress={confirmar}>
        <Text style={styles.textoBotao}>Confirmar</Text>
      </Pressable>
    </ScrollView>
  );
}