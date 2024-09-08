import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Pressable, Modal, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { id: '1', nm_cliente: 'Gabriel', dt_atendimento: "2024-09-09", nm_servico:"Escova Progressiva", valor:"35,00"},
    { id: '2', nm_cliente: 'Gabriel Henrique', dt_atendimento: "2024-09-09", nm_servico:"Escova Progressiva", valor:"35,00"},
    { id: '3', nm_cliente: 'Larissa', dt_atendimento: "2024-09-10", nm_servico:"Manicure", valor:"40,00"},
    { id: '4', nm_cliente: 'Jenifer', dt_atendimento: "2024-09-10", nm_servico:"Pedicure", valor:"30,00"},
    { id: '5', nm_cliente: 'Ana', dt_atendimento: "2024-09-12", nm_servico:"Escova", valor:"25,00"},
    { id: '6', nm_cliente: 'Natália', dt_atendimento: "2024-09-12", nm_servico:"Escova", valor:"25,00"},
    { id: '7', nm_cliente: 'Valesca', dt_atendimento: "2024-09-13", nm_servico:"Selagem", valor:"55,00"},
    { id: '8', nm_cliente: 'Beatriz', dt_atendimento: "2024-09-13", nm_servico:"Hidratação", valor:"60,00"},
    { id: '9', nm_cliente: 'Bruna', dt_atendimento: "2024-09-14", nm_servico:"Selagem", valor:"55,00"},
  ]);

  const [filteredData, setFilteredData] = useState(data); // Estado para lista filtrada
  const [selectedItem, setSelectedItem] = useState(null); // Estado para o item selecionado
  const [modalVisible, setModalVisible] = useState(false); // Estado para controle do modal

  const formatDate = (dateString) => {
    const date = new Date(dateString); // Converte a string para um objeto Date
    return new Intl.DateTimeFormat('pt-BR').format(date); // Formata no formato dd/mm/aaaa
  };

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

  // Função para abrir o modal e definir o item selecionado
  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
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
        <Pressable style={styles.btnBuscar} onPress={handleSearch}>
          <Text style={styles.btnBuscarText}>Buscar</Text>
        </Pressable>
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
            <Pressable onPress={() => openModal(item)} style={styles.iconButton}>
              <Icon name="info-circle" size={24} color="#c74098" />
              <Text style={styles.iconButtonText}>Ver detalhes</Text>
            </Pressable>
          </View>
        )}
      />

      {/* Modal para exibir detalhes do item */}
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Detalhes do Atendimento</Text>
              <Text>Cliente: {selectedItem.nm_cliente}</Text>
              <Text>Data Agendamento: {selectedItem.dt_atendimento}</Text>
              <Text>Serviço: {selectedItem.nm_servico}</Text>
              <Text>Valor: R${selectedItem.valor}</Text>
              
              <Pressable onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}