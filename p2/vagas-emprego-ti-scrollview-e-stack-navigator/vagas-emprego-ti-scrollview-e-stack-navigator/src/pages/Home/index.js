import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation();

  const vagas = [
    {
      id: '1',
      titulo: 'Desenvolvedor React Native Jr',
      salario: 'R$ 4.500,00',
      empresa: 'MobileLab Soluções',
      descricao:
        'Desenvolvimento e manutenção de aplicativos móveis com React Native, TypeScript e consumo de APIs RESTful.',
      contato: 'carreiras@mobilelab.com.br',
    },
    {
      id: '2',
      titulo: 'Engenheiro de Dados Pleno',
      salario: 'R$ 8.200,00',
      empresa: 'BigData Analytics',
      descricao:
        'Construção de pipelines de dados em Python, PySpark, modelagem em Data Warehouses na AWS e BigQuery.',
      contato: 'talent@bigdata.io',
    },
    {
      id: '3',
      titulo: 'Analista de Segurança da Informação',
      salario: 'R$ 7.000,00',
      empresa: 'CyberShield Sec',
      descricao:
        'Monitoramento de ameaças (SIEM), testes de vulnerabilidade, implementação de políticas de segurança e conformidade LGPD.',
      contato: 'rh@cybershield.com',
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
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.cabecalho}>Mural de Vagas</Text>

      {vagas.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.tituloVaga}>{item.titulo}</Text>

          <Pressable
            style={styles.botaoSaibaMais}
            onPress={() => navigation.navigate('Detalhes', { vaga: item })}>
            <Text style={styles.textoBotao}>Saiba mais</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}
