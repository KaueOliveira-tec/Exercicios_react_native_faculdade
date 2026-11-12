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
    color: '#24292E',
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
    fontSize: 16,
  },
  botaoBuscar: {
    backgroundColor: '#24292E',
    width: 52,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  cardPerfil: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 16,
  },
  item: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    width: '100%',
    marginBottom: 8,
  },
  valor: {
    fontWeight: 'normal',
    color: '#111',
  },
});