import { Text, View, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Card } from 'react-native-paper';

const VagaCard = ({ titulo, salario, descricao, contato }) => (
  <Card style={styles.card}> 
    <Text style={styles.tituloVaga}>{titulo}</Text>
    <Text style={styles.textoInfo}>Salário: {salario}</Text>
    <Text style={styles.textoInfo}>Descrição: {descricao}</Text>
    <Text style={styles.textoInfo}>Contato: {contato}</Text>
  </Card>
);


export default function PainelVagas() {
  const vagas = [
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
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.titulo1}>Vagas</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {vagas.map((vaga) => (
          <VagaCard 
            key={vaga.id}
            titulo={vaga.titulo}
            salario={vaga.salario}
            descricao={vaga.descricao}
            contato={vaga.contato}
          />
        ))}
      </ScrollView>
    </View>
  );
}
