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
    borderColor: '#008000',
    backgroundColor: '#008000',
    height: 50,
    marginVertical: 20,
    justifyContent: 'center',
    borderRadius: 4,
  },
  textBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  estagio: {
    fontSize: 24,
    color: '#ff2c2c',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  img: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  }
})

export { styles };