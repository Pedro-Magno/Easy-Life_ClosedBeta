// src/screens/cadastro/style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23195F',
  },
  containerLogin: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  titleLogin: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitleLogin: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    width: '100%',
    backgroundColor: "#683e75",
  },
  textButtonLogin: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default styles;
