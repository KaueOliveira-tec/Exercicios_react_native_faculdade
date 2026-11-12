import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    padding: 16,
  },
  cardDetalhes: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EAECF0',
    marginBottom: 30,
  },
  imagemDetalhe: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#101828',
    marginBottom: 8,
  },
  preco: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 16,
  },
  divisor: {
    height: 1,
    backgroundColor: '#EAECF0',
    marginVertical: 12,
  },
  labelDescricao: {
    fontSize: 16,
    fontWeight: '600',
    color: '#344054',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 15,
    color: '#475467',
    lineHeight: 22,
    marginBottom: 16,
  },
  vendedor: {
    fontSize: 14,
    color: '#667085',
    marginBottom: 24,
  },
  destaqueVendedor: {
    fontWeight: 'bold',
    color: '#101828',
  },
  botaoVoltar: {
    backgroundColor: '#475467',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});