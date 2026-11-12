import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },
  textoLoading: {
    marginTop: 10,
    fontSize: 16,
    color: '#475569',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8FAFC',
  },
  botaoIncluir: {
    flexDirection: 'row',
    backgroundColor: '#0066CC',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  textoBotaoIncluir: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  textoVazio: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: 16,
    marginTop: 40,
  },
});