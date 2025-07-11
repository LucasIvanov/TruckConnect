import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import StyledTextInput from '../components/StyledTextInput';
import StyledButton from '../components/StyledButton';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    // Simula uma chamada de API
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Aqui você adicionaria a lógica de autenticação
      router.replace('/(tabs)/home'); // Redireciona para a home
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <View style={styles.header}>
            <Ionicons name="business" size={60} color="#1976D2" />
            <Text style={styles.title}>TruckConnect</Text>
            <Text style={styles.subtitle}>Conectando produtores e transportadores</Text>
        </View>

        <View style={styles.form}>
            <StyledTextInput
                icon="mail-outline"
                placeholder="Seu e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <StyledTextInput
                icon="lock-closed-outline"
                placeholder="Sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                isPassword
            />
        </View>

        <StyledButton
            title="Entrar"
            onPress={handleLogin}
            loading={loading}
        />
        
        <TouchableOpacity style={styles.linkContainer} onPress={() => router.push('/register')}>
          <Text style={styles.linkText}>Não tem uma conta? <Text style={styles.linkTextBold}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F7F8FA' },
    content: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 34,
        fontFamily: 'Poppins-Bold',
        color: '#1A237E',
        marginTop: 16,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#546E7A',
        marginTop: 4,
    },
    form: {
        width: '100%',
        marginBottom: 20,
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