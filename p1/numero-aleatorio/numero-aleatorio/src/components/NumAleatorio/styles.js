import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  titulo1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#333'
  },
  textoInstrucao: {
    fontSize: 14,
    color: '#d9534f',
    marginBottom: 10
  },
  textoResultado: {
    fontSize: 18,
    color: '#d9534f',
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#d9534f',
    minWidth: 100,
    textAlign: 'center',
    paddingBottom: 5
  },
  botao: {
    backgroundColor: '#d4edda',
    borderColor: '#28a745',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4
  },
  textoBotao: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export { styles };