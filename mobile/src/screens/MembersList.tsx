import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';
import * as SecureStore from 'expo-secure-store';

export default function MembersList() {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const token = await SecureStore.getItemAsync('token');
      try {
        const res = await api.get('/members', { headers: { Authorization: `Bearer ${token}` } });
        setMembers(res.data);
      } catch (err) {
        setMembers([]);
      }
    };
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Members</Text>
      <FlatList data={members} keyExtractor={(i) => `${i.id}`} renderItem={({ item }) => <Text style={styles.item}>{item.firstName} {item.lastName} {item.role ? `- ${item.role}` : ''}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  item: { padding: 8, borderBottomWidth: 1, borderBottomColor: '#eee' }
});
