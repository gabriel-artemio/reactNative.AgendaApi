import React from 'react';
import { View, Text, Pressable, Linking, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const shareViaWhatsApp = () => {
    const url = 'https://www.google.com'; // URL a ser compartilhada
    const message = `Olá pessoal, este é o meu site para realizar os agendamentos! ${url}`;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;

    Linking.openURL(whatsappUrl)
      .catch(() => {
        Alert.alert('Erro', 'WhatsApp não está instalado');
      });
  };

  return (
    <View>
      <Pressable style={styles.btnShare} onPress={shareViaWhatsApp}>
        <Text style={styles.btnShareText}>
          Compartilhar no WhatsApp <Icon name="share-square-o" size={18} color="#fff" />
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  btnShare: {
    backgroundColor: '#c74098',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnShareText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});