import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  containerLight: {
    backgroundColor: '#F5F5F5',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  textoLight: {
    color: '#222222',
  },
  textoDark: {
    color: '#FFFFFF',
  },
  configBox: {
    backgroundColor: 'rgba(150, 150, 150, 0.15)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  fraseBox: {
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    minHeight: 160,
    justifyContent: 'center',
  },
  frase: {
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 32,
  },
  frasePequena: {
    fontSize: 18,
  },
  fraseGrande: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  autor: {
    fontSize: 16,
    marginTop: 12,
    textAlign: 'right',
    width: '100%',
  },
  botaoNovaFrase: {
    backgroundColor: '#0066CC',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});