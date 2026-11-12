import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 30,
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 8,
  },
  infoValor: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '500',
    marginBottom: 8,
  },
  salario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16A34A',
    marginBottom: 8,
  },
  divisor: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 14,
  },
  descricao: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 22,
    marginTop: 4,
    marginBottom: 12,
  },
  contato: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 24,
  },
  botaoVoltar: {
    backgroundColor: '#475569',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});