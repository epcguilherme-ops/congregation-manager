import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import api from '../services/api';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const doLogin = async () => {
    try {
      const r = await api.post('/auth/login', { email, password });
      const token = r.data.token;
      await SecureStore.setItemAsync('token', token);
      navigation.replace('Members');
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} autoCapitalize="none" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      {!!error && <Text style={styles.error}>{error}</Text>}
      <Button title="Login" onPress={doLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 12, borderRadius: 6 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  error: { color: 'red', marginBottom: 12 }
});
