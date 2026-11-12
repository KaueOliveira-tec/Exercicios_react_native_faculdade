import { Card } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import { styles } from './stylesheet/styles';
import FotoAtual from './assets/foto_atual.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={FotoAtual} style={styles.img} />
      <Card style={styles.card}>
        <Text style={styles.titulo1}>Dados Pessoais</Text>
        <Text style={styles.texto}>
          {`Nome: Kauê de Oliveira
Idade: 21 anos 
Email: kaueomartins2.0@gmail.com`}
        </Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.titulo1}>Formação</Text>
        <Text style={styles.texto}>
          Tecnólogo em Sistemas para Internet na Fatec Rubens Lara (6º)
        </Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.titulo1}>Projetos</Text>
        <Text style={styles.texto}>
          {`- Planejai (08/2026)
Projeto frontend de criação de um educador financeiro inteligente utilizando React e IA generativa, onde o usuário pode controlar gastos e planejar metas financeiras junto ao Gemini.  

- Site Linkin Park - Projeto Acadêmico de Site FullStack  (06/2026)
Projeto FullStack desenvolvido para fins acadêmicos de estudos sobre CRUD, Programação Orientada a Objetos e Segurança. Destaque para o uso da linguagem Java com o framework Spring Boot para integrar ao frontend, onde foi utilizado JavaScript, HTML e CSS.`}
        </Text>
      </Card>

    </View>
  );
}
