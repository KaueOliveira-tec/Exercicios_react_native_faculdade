import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: '#0066CC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  conteudo: {
    marginBottom: 14,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 12,
  },
  botaoEditar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F59E0B',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginRight: 10,
  },
  botaoExcluir: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DC2626',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
});