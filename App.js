import React from 'react';
import { SafeAreaView, ScrollView, Text, Alert, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoCard from './src/components/InfoCard';
import StudentDirectory from './src/screens/StudentDirectory';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Question 1: InfoCard rendered twice with different props */}
        <Text style={styles.sectionTitle}>Daftar Tugas</Text>
        <InfoCard
          title="Laporan Praktikum Mobile"
          status="selesai"
          onPress={() => Alert.alert('Detail', 'Laporan Praktikum Mobile - Selesai')}
        />
        <InfoCard
          title="Project UTS React Native"
          status="proses"
          onPress={() => Alert.alert('Detail', 'Project UTS React Native - Proses')}
        />

        {/* Question 2: Student directory with real-time search */}
        <View style={styles.directory}>
          <StudentDirectory />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    paddingTop: 30,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#222',
  },
  directory: {
    flex: 1,
    marginTop: 12,
  },
});
