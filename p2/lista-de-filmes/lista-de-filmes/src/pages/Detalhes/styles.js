import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  capaGrande: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
  },
  conteudo: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 14,
  },
  labelSinopse: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E50914',
    marginBottom: 6,
  },
  sinopse: {
    fontSize: 16,
    color: '#DDD',
    lineHeight: 24,
    marginBottom: 24,
  },
  botaoVoltar: {
    backgroundColor: '#444',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});