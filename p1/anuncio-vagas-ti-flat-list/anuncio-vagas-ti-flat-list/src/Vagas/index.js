import { Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Card } from 'react-native-paper';

function VagaItem({ data }) {
  return (
    <Card style={styles.card}> 
    <Text style={styles.tituloVaga}>{data.titulo}</Text>
    <Text style={styles.textoInfo}>Salário: {data.salario}</Text>
    <Text style={styles.textoInfo}>Descrição: {data.descricao}</Text>
    <Text style={styles.textoInfo}>Contato: {data.contato}</Text>
  </Card>
  )
}


export default function PainelVagas() {
  const [vagas] = useState([
    { 
      id: 1, 
      titulo: 'Desenvolvedor Backend', 
      salario: 'R$ 3000,00', 
      descricao: 'Atuação na criação de APIs RESTful usando Node.js.', 
      contato: 'backend@empresa.com' 
    },
    { 
      id: 2, 
      titulo: 'Engenheiro de Dados', 
      salario: 'R$ 3000,00', 
      descricao: 'Manutenção de pipelines de dados e modelagem SQL.', 
      contato: 'dados@empresa.com' 
    },
    { 
      id: 3, 
      titulo: 'Desenvolvedor Frontend', 
      salario: 'R$ 2800,00', 
      descricao: 'Criação de interfaces responsivas com React Native.', 
      contato: 'front@empresa.com' 
    },
    { 
      id: 4, 
      titulo: 'Estagiário em Desenvolvimento Web', 
      salario: 'R$ 1500,00', 
      descricao: 'Oportunidade para iniciar na área criando interfaces com HTML, CSS e JavaScript.', 
      contato: 'estagio@techstart.com' 
    },
    { 
      id: 5, 
      titulo: 'Designer UI/UX Júnior', 
      salario: 'R$ 2500,00', 
      descricao: 'Criação de interfaces modernas, limpas e responsivas para aplicativos na área da saúde.', 
      contato: 'design@healthtech.com' 
    },
    {
      id: '6', 
      titulo: 'Suporte de TI e Administrativo', 
      salario: 'R$ 1800,00', 
      descricao: 'Atendimento e suporte técnico em sistemas internos e auxílio em rotinas administrativas em ambiente hospitalar.', 
      contato: 'rh@hospitalcentral.com'
    }
  ]);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>Vagas</Text>

      <FlatList 
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VagaItem data={item} />}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
