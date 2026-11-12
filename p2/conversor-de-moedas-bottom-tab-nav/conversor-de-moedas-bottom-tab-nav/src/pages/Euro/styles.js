import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0066CC',
  },
  input: {
    backgroundColor: '#FFF',
    height: 48,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 18,
  },
  botao: {
    backgroundColor: '#0066CC',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
    color: '#333',
  },
});