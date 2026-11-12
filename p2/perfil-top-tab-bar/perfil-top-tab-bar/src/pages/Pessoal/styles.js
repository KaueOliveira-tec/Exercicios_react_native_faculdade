import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontSize: 16,
    color: '#0066CC',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
});