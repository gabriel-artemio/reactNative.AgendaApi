import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { id: '1', nm_cliente: 'Gabriel', dt_atendimento: "2024-09-09"},
    { id: '2', nm_cliente: 'Gabriel Henrique', dt_atendimento: "2024-09-09"},
    { id: '3', nm_cliente: 'Larissa', dt_atendimento: "2024-09-10"},
    { id: '4', nm_cliente: 'Jenifer', dt_atendimento: "2024-09-10"},
    { id: '5', nm_cliente: 'Ana', dt_atendimento: "2024-09-12"},
    { id: '6', nm_cliente: 'Natália', dt_atendimento: "2024-09-12"},
    { id: '7', nm_cliente: 'Valesca', dt_atendimento: "2024-09-13"},
    { id: '8', nm_cliente: 'Beatriz', dt_atendimento: "2024-09-13"},
    { id: '9', nm_cliente: 'Bruna', dt_atendimento: "2024-09-14"},
  ]);

  const [filteredData, setFilteredData] = useState(data); // Estado para lista filtrada

  // Função que realiza a busca
  const handleSearch = () => {
    if (searchQuery) {
      const filtered = data.filter((item) =>
        item.nm_cliente.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Se o campo de busca estiver vazio, mostrar todos os itens
    }
  };

  return (
    <View style={styles.container}>
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Inserir texto para pesquisa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.btnBuscar} onPress={handleSearch}>
          <Text style={styles.btnBuscarText}>Buscar</Text>
        </TouchableOpacity>
        {/* <Button title="Buscar" onPress={handleSearch} /> */}
      </View>

      {/* FlatList com a lista filtrada */}
      <FlatList
        style={styles.flatlist}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Cliente: {item.nm_cliente}</Text>
            <Text>Data Agendamento: {item.dt_atendimento}</Text>
          </View>
        )}
      />
    </View>
  );
}