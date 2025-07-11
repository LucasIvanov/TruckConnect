import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Dados de exemplo de cargas disponíveis
const cargasDisponiveis = [
  { id: '1', produto: 'Soja', quantidade: '30t', origem: 'Cascavel, PR', destino: 'Paranaguá, PR' },
  { id: '2', produto: 'Milho', quantidade: '25t', origem: 'Toledo, PR', destino: 'Santos, SP' },
  { id: '4', produto: 'Adubo', quantidade: '28t', origem: 'Maringá, PR', destino: 'Dourados, MS' },
  { id: '5', produto: 'Farelo de Soja', quantidade: '32t', origem: 'Foz do Iguaçu, PR', destino: 'Chapecó, SC' },
];

export default function CargasScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => router.push(`/detalhes/${item.id}`)}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.produto} - {item.quantidade}</Text>
        <Text style={styles.cardSubtitle}>{item.origem} → {item.destino}</Text>
        <Text style={styles.verDetalhes}>Ver Detalhes</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.title}>Cargas Disponíveis</Text>
      </View>
      <FlatList
        data={cargasDisponiveis}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F7F8FA' },
    header: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 10 },
    title: { fontSize: 32, fontFamily: 'Poppins-Bold', color: '#1A237E' },
    list: { paddingHorizontal: 24 },
    card: { backgroundColor: '#FFF', borderRadius: 12, padding: 20, marginBottom: 16, elevation: 3 },
    cardTitle: { fontSize: 18, fontFamily: 'Poppins-Bold', color: '#333' },
    cardSubtitle: { fontSize: 14, fontFamily: 'Poppins-Regular', color: '#546E7A', marginTop: 4 },
    verDetalhes: { fontSize: 14, fontFamily: 'Poppins-Bold', color: '#1976D2', marginTop: 12, },
});