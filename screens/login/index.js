import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';

export default function App({ navigation }) {

  const [usuario, setUsername] = useState('');
  const [senha, setPassword] = useState('');

  const handleLogin = async () => {
    if(usuario != null && senha != null){
      navigation.navigate('HomeTabs');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AgendaWeb</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.btnLogin} onPress={handleLogin}>
        <Text style={styles.btnLoginText}>Entrar</Text>
      </Pressable>
      <Text style={styles.mutted}>Desenvolvido por Gabriel Artemio</Text>
    </View>
  );
}