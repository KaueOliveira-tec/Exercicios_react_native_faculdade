import { Card } from 'react-native-paper';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>Projetos</Text>
        <Text style={styles.descricao}>
          {`- Planejai (08/2026)
Projeto frontend de criação de um educador financeiro inteligente utilizando React e IA generativa, onde o usuário pode controlar gastos e planejar metas financeiras junto ao Gemini.  

- Site Linkin Park - Projeto Acadêmico de Site FullStack  (06/2026)
Projeto FullStack desenvolvido para fins acadêmicos de estudos sobre CRUD, Programação Orientada a Objetos e Segurança. Destaque para o uso da linguagem Java com o framework Spring Boot para integrar ao frontend, onde foi utilizado JavaScript, HTML e CSS.`}
        </Text>
      </Card>
    </View>
  );
}
