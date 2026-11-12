import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    padding: 16,
  },
  cabecalho: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1D2939',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAECF0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  imagemItem: {
    width: 350,
    height: 300,
    borderRadius: 8,
    marginBottom: 12,
  },
  tituloItem: {
    fontSize: 18,
    fontWeight: '600',
    color: '#101828',
    marginBottom: 12,
    textAlign: 'center',
  },
  botaoDetalhes: {
    backgroundColor: '#0066CC',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});