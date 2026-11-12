import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation();

  const vagas = [
    {
      id: '1',
      titulo: 'Desenvolvedor Full Stack Node/React',
      salario: 'R$ 9.500,00',
      empresa: 'StackCraft Software',
      descricao: 'Desenvolvimento end-to-end de soluções web com NestJS, React.js e PostgreSQL.',
      contato: 'jobs@stackcraft.dev',
    },
    {
      id: '2',
      titulo: 'Engenheiro DevOps Kubernetes',
      salario: 'R$ 11.000,00',
      empresa: 'CloudInfrastructure',
      descricao: 'Gerenciamento de clusters Kubernetes na GCP, criação de pipelines CI/CD com GitLab CI e automação com Terraform.',
      contato: 'devops@cloudinfra.com',
    },
    {
      id: '3',
      titulo: 'Especialista em QA / Automação',
      salario: 'R$ 6.800,00',
      empresa: 'QualityFirst Labs',
      descricao: 'Criação e execução de testes automatizados E2E utilizando Cypress e Appium.',
      contato: 'qa-talents@qualityfirst.io',
    },
    {
      id: '4',
      titulo: 'Desenvolvedor Java Backend Sr',
      salario: 'R$ 10.500,00',
      empresa: 'FinTech Brasil',
      descricao:
        'Construção e manutenção de microsserviços em Java 17, Spring Boot, Apache Kafka e banco de dados PostgreSQL.',
      contato: 'vagas@fintechbrasil.com.br',
    },
    {
      id: '5',
      titulo: 'Arquiteto de Nuvem AWS',
      salario: 'R$ 14.000,00',
      empresa: 'CloudTech Enterprise',
      descricao:
        'Planejamento e migração de arquitetura on-premises para AWS, garantindo alta disponibilidade, segurança e otimização de custos.',
      contato: 'carreiras@cloudtech.com',
    },
    {
      id: '6',
      titulo: 'UX/UI Designer Pleno',
      salario: 'R$ 6.500,00',
      empresa: 'Creative Digital Agency',
      descricao:
        'Criação de wireframes, protótipos interativos de alta fidelidade no Figma, testes de usabilidade e manutenção de Design System.',
      contato: 'talent@creativedigital.design',
    },
    {
      id: '7',
      titulo: 'Desenvolvedor Python & IA',
      salario: 'R$ 9.000,00',
      empresa: 'AI Mind Labs',
      descricao:
        'Integração de modelos de Inteligência Artificial, desenvolvimento de APIs em FastAPI/Django e automação de pipelines de dados.',
      contato: 'rh@aimindlabs.ai',
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.tituloVaga}>{item.titulo}</Text>
            
            <Pressable 
              style={styles.botaoSaibaMais} 
              onPress={() => navigation.navigate('Detalhes', { vaga: item })}
            >
              <Text style={styles.textoBotao}>Saiba mais</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}