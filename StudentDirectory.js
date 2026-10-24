import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

// Static dataset defined outside the component
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

export default function StudentDirectory() {
  const [keyword, setKeyword] = useState('');

  // Real-time, case-insensitive filter on student name
  const filteredData = DAFTAR_MAHASISWA.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nama}>{item.nama}</Text>
      <Text style={styles.prodi}>{item.prodi}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Direktori Mahasiswa</Text>

      <TextInput
        style={styles.input}
        placeholder="Cari nama mahasiswa..."
        value={keyword}
        onChangeText={setKeyword}
        autoCorrect={false}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>Data tidak ditemukan!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    marginBottom: 12,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  nama: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  prodi: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  empty: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 15,
    color: '#999',
  },
});
