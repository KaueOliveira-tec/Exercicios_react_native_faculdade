import { Text, View, Switch, Pressable, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Slider } from '@miblanchard/react-native-slider';
import { styles } from './styles';


export default function AberturaConta() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Masculino');
  const [escolaridade, setEscolaridade] = useState('Ensino Superior');
  const [limite, setLimite] = useState(200);
  const [brasileiro, setBrasileiro] = useState(true);
  
  const [dadosConfirmados, setDadosConfirmados] = useState(null);

  const handleConfirmar = () => {
    if (nome.trim() === '' || idade.trim() === '') {
      alert('Por favor, preencha nome e idade.');
      return;
    }

    setDadosConfirmados({
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      brasileiro
    });
  };

  return(
    <ScrollView contentContainerStyle={styles.container}> 
        <Text style={styles.titulo}>Abertura de Conta</Text>

        <View style={styles.inputGroup}> 
          <Text style={styles.label}>Nome:</Text>
          <TextInput 
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />
        </View>

        <View style={styles.inputGroup}> 
          <Text style={styles.label}>Idade:</Text>
          <TextInput 
            style={styles.input}
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
            placeholder="Sua idade"
          />
        </View>

        <View style={styles.inputGroup}> 
          <Text style={styles.label}>Sexo:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={sexo}
              onValueChange={(itemValue) => setSexo(itemValue)}
            >
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Feminino" value="Feminino" />
              <Picker.Item label="Outro" value="Outro" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}> 
          <Text style={styles.label}>Escolaridade:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={escolaridade}
              onValueChange={(itemValue) => setEscolaridade(itemValue)}
            >
              <Picker.Item label="Ensino Fundamental" value="Ensino Fundamental" />
              <Picker.Item label="Ensino Médio" value="Ensino Médio" />
              <Picker.Item label="Ensino Superior" value="Ensino Superior" />
              <Picker.Item label="Pós-Graduação" value="Pós-Graduação" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}> 
          <Text style={styles.label}>Limite: R$ {limite.toFixed(2)}</Text>
          <Slider 
            containerStyle={{ width: '100%', height: 40 }}
            minimumValue={0}
            maximumValue={2000}
            step={50}
            value={limite}
            onValueChange={(value) => {
              const novo = Array.isArray(value) ? value[0] : value;
              setLimite(Number(novo));
            }}
            minimumTrackTintColor="#5B5FC7"
            maximumTrackTintColor="#D1D1D1"
            thumbTintColor="#5B5FC7"
          />
        </View>

        <View style={[styles.inputGroup, styles.rowGroup]}> 
          <Text style={styles.label}>Brasileiro:</Text>
          <Switch 
            value={brasileiro}
            onValueChange={setBrasileiro}
            trackColor={{ false: '#767577', true: '#5B5FC7' }}
          />
        </View>

        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={handleConfirmar}
        >
          <Text style={styles.buttonText}>Confirmar</Text>
        </Pressable>

        {dadosConfirmados && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitulo}>Dados Informados:</Text>
            <Text style={styles.resultText}>Nome: {dadosConfirmados.nome}</Text>
            <Text style={styles.resultText}>Idade: {dadosConfirmados.idade}</Text>
            <Text style={styles.resultText}>Sexo: {dadosConfirmados.sexo}</Text>
            <Text style={styles.resultText}>Escolaridade: {dadosConfirmados.escolaridade}</Text>
            <Text style={styles.resultText}>Limite: R$ {dadosConfirmados.limite.toFixed(2)}</Text>
            <Text style={styles.resultText}>Brasileiro: {dadosConfirmados.brasileiro ? 'Sim' : 'Não'}</Text>
          </View>
        )}
      </ScrollView>
  );
}