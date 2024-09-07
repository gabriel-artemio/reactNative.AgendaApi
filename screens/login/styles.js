import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 34,
    color:'#c74098',
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  mutted: {
    fontSize: 16,
    color:'#808080',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  btnLogin: {
    backgroundColor: '#c74098',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnLoginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});