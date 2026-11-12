import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    color: '#ff8c00',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#222',
    height: 50,
    marginVertical: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 4,
  },
  botao: {
    borderWidth: 2,
    borderColor: '#4169e1',
    backgroundColor: '#f0f8ff',
    height: 50,
    marginVertical: 20,
    justifyContent: 'center',
    borderRadius: 4,
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: '#4169e1',
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 24,
    color: '#4caf50',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export { styles };
