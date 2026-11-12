import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#222',
  },
  buscaRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 18,
  },
  botaoBuscar: {
    backgroundColor: '#0066CC',
    width: 52,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  cardResultado: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  valor: {
    fontWeight: 'normal',
    color: '#111',
  },
});