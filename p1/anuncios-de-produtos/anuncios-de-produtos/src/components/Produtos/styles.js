import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
  titulo1: {
    fontSize: 26,
    color: '#d9534f',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  scrollContainer: {
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  card: {
    width: 180,
    marginRight: 15,
    backgroundColor: '#fff'
  },
  fotoProduto: {
    height: 120
  },
  conteudoCard: {
    alignItems: 'center',
    marginTop: 10
  },
  textoProduto: {
    fontSize: 20,
    lineHeight: 22,
    textAlign: 'center'
  },
  textoPreco: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 18
  }
});

export { styles };