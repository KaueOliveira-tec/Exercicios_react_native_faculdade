import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 12,
  },
  card: {
    backgroundColor: '#222',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  topoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  tituloFilme: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    flex: 1,
    marginRight: 10,
  },
  botaoLeiaMais: {
    backgroundColor: '#E50914',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  capa: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
});
