import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#c74098',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
      },
      flatlist: {
        flex: 1,
      },
      item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      btnBuscar: {
        backgroundColor: '#c74098',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      btnBuscarText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
});