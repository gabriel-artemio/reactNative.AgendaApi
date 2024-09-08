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
      textTitle:{
        fontWeight: 'bold',
      },
      iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      iconButtonText: {
        marginLeft: 5,
        color: '#c74098',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContent: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      closeButton: {
        marginTop: 20,
        backgroundColor: '#c74098',
        padding: 10,
        borderRadius: 5,
      },
      closeButtonText: {
        color: 'white',
        textAlign: 'center',
      },
});