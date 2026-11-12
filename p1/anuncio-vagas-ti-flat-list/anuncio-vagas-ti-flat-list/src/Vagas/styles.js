import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  titulo1: {
    fontSize: 24,
    color: '#d9534f', 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    borderWidth: 2,
    borderColor: '#333',
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  tituloVaga: {
    fontSize: 20,
    color: '#4169e1', 
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textoInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  }
});

export { styles };