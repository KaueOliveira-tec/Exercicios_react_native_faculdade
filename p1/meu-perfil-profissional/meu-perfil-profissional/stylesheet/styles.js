import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  titulo1: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 4,
    marginLeft: 8
  },
  img: {
    width: 330,
    height: 340,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 20
  },
  texto: {
    fontSize: 12,
    color: '#000000',
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 7
  },
  card: {
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    marginTop: 12
  }
});

export { styles };