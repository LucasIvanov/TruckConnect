import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // Limpa a pilha de navegação e volta para a tela de login inicial ('/index')
    router.replace('/');
  };

  const confirmLogout = () => {
    Alert.alert(
      "Sair da Conta",
      "Você tem certeza que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sim, Sair", onPress: handleLogout, style: "destructive" },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Perfil</Text>
      </View>

      <View style={styles.content}>
        <Ionicons name="person-circle" size={120} color="#1976D2" />
        <Text style={styles.userName}>Nome do Usuário</Text>
        <Text style={styles.userEmail}>email.do.usuario@exemplo.com</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={confirmLogout}>
          <Ionicons name="log-out-outline" size={24} color="#D32F2F" />
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F7F8FA' },
    header: { paddingHorizontal: 24, paddingTop: 20 },
    title: { fontSize: 32, fontFamily: 'Poppins-Bold', color: '#1A237E' },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    userName: {
      fontSize: 24,
      fontFamily: 'Poppins-Bold',
      marginTop: 20,
      color: '#333',
    },
    userEmail: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: '#546E7A',
      marginTop: 4,
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: '#FFEBEE',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 12,
    },
    logoutText: {
      color: '#D32F2F',
      fontSize: 16,
      fontFamily: 'Poppins-Bold',
      marginLeft: 10,
    },
});