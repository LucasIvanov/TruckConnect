import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import StyledButton from '../../components/StyledButton';

// Dados de exemplo (em uma aplicação real, viriam de uma API)
const minhasCargas = [
  { id: '1', produto: 'Soja', quantidade: '30t', origem: 'Cascavel, PR', destino: 'Paranaguá, PR', status: 'Ativa' },
  { id: '2', produto: 'Milho', quantidade: '25t', origem: 'Toledo, PR', destino: 'Santos, SP', status: 'Ativa' },
  { id: '3', produto: 'Trigo', quantidade: '35t', origem: 'Cascavel, PR', destino: 'Goiânia, GO', status: 'Finalizada' },
];

export default function HomeScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.produto} - {item.quantidade}</Text>
      <Text style={styles.cardSubtitle}>{item.origem} → {item.destino}</Text>
      <View style={[styles.statusBadge, item.status === 'Ativa' ? styles.statusAtiva : styles.statusFinalizada]}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Cargas</Text>
      </View>

      <FlatList
        data={minhasCargas.filter(c => c.status === 'Ativa')}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>Você ainda não postou nenhuma carga.</Text>}
      />

      <View style={styles.buttonContainer}>
         <StyledButton title="Publicar Nova Carga" onPress={() => router.push('/postar')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F7F8FA' },
    header: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 10 },
    title: { fontSize: 32, fontFamily: 'Poppins-Bold', color: '#1A237E' },
    list: { paddingHorizontal: 24, paddingBottom: 20 },
    card: {
      backgroundColor: '#FFF',
      borderRadius: 12,
      padding: 20,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    cardTitle: { fontSize: 18, fontFamily: 'Poppins-Bold', color: '#333' },
    cardSubtitle: { fontSize: 14, fontFamily: 'Poppins-Regular', color: '#546E7A', marginTop: 4 },
    statusBadge: { borderRadius: 12, paddingVertical: 4, paddingHorizontal: 10, alignSelf: 'flex-start', marginTop: 12 },
    statusAtiva: { backgroundColor: '#E8F5E9' }, // Verde claro
    statusFinalizada: { backgroundColor: '#FFEBEE' }, // Vermelho claro
    statusText: { fontFamily: 'Poppins-Bold', fontSize: 12, color: '#1B5E20' },
    emptyText: { textAlign: 'center', marginTop: 50, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#546E7A' },
    buttonContainer: { padding: 24, borderTopWidth: 1, borderTopColor: '#EEE', backgroundColor: '#F7F8FA' },
});