import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import StyledTextInput from '../components/StyledTextInput';
import StyledButton from '../components/StyledButton';

type UserType = 'produtor' | 'transportadora';

export default function RegisterScreen() {
  const router = useRouter();
  const [userType, setUserType] = useState<UserType>('produtor');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <Text style={styles.title}>Crie sua Conta</Text>
        <Text style={styles.label}>Eu sou um...</Text>
        
        {/* Seletor de Tipo de Usuário */}
        <View style={styles.userTypeSelector}>
            <TouchableOpacity 
                style={[styles.userTypeButton, userType === 'produtor' && styles.userTypeButtonSelected]}
                onPress={() => setUserType('produtor')}
            >
                <Text style={[styles.userTypeText, userType === 'produtor' && styles.userTypeTextSelected]}>Produtor</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.userTypeButton, userType === 'transportadora' && styles.userTypeButtonSelected]}
                onPress={() => setUserType('transportadora')}
            >
                <Text style={[styles.userTypeText, userType === 'transportadora' && styles.userTypeTextSelected]}>Transportadora</Text>
            </TouchableOpacity>
        </View>

        <StyledTextInput icon="person-outline" placeholder="Nome completo" />
        <StyledTextInput icon="mail-outline" placeholder="E-mail" keyboardType="email-address" />
        <StyledTextInput icon="lock-closed-outline" placeholder="Crie uma senha" secureTextEntry isPassword/>
        
        <StyledButton title="Registrar" onPress={() => { /* Lógica de registro */}} />

        <TouchableOpacity style={styles.linkContainer} onPress={() => router.back()}>
          <Text style={styles.linkText}>Já tem uma conta? <Text style={styles.linkTextBold}>Faça login</Text></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F7F8FA' },
    content: { flex: 1, justifyContent: 'center', padding: 24 },
    title: {
        fontSize: 32,
        fontFamily: 'Poppins-Bold',
        color: '#1A237E',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#546E7A',
        marginBottom: 10,
    },
    userTypeSelector: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#E0E0E0',
        borderRadius: 12,
        marginBottom: 25,
    },
    userTypeButton: {
        flex: 1,
        paddingVertical: 14,
        alignItems: 'center',
        borderRadius: 12,
    },
    userTypeButtonSelected: {
        backgroundColor: '#1976D2',
    },
    userTypeText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#333'
    },
    userTypeTextSelected: {
        color: '#FFF'
    },
    linkContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    linkText: {
        color: '#546E7A',
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    },
    linkTextBold: {
        fontFamily: 'Poppins-Bold',
        color: '#1976D2'
    },
});