import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#222',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
    color: '#444',
  },
  input: {
    backgroundColor: '#FFF',
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 18,
  },
  pickerBox: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    overflow: 'hidden',
  },
  botao: {
    backgroundColor: '#0066CC',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardResultado: {
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 10,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
  },
  textoCotacao: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  textoResultado: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});