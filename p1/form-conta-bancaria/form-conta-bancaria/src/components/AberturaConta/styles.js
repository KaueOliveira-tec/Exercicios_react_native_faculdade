import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D13438', 
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  rowGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    borderRadius: 6,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#5B5FC7', 
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  resultTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5B5FC7',
    marginBottom: 15,
  },
  resultText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  }
});