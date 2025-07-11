import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Previne que a tela de splash (abertura) desapareça automaticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Carrega as fontes personalizadas para o projeto
  const [loaded, error] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  // Hook para controlar a exibição da tela de splash
  useEffect(() => {
    if (loaded || error) {
      // Esconde a tela de splash quando as fontes estiverem carregadas (ou se der erro)
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Se as fontes ainda não carregaram, não renderiza nada para evitar tela em branco
  if (!loaded && !error) {
    return null;
  }

  return (
    // O Stack é o nosso gerenciador de navegação. Pense nele como uma pilha de telas.
    <Stack>
      {/* A opção screenOptions={{ headerShown: false }} esconde o cabeçalho padrão
        em todas as telas, permitindo um design mais limpo e customizado, 
        como o que implementamos nas telas de login e registro.
      */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      
      {/* Esta linha define o grupo de telas que terá abas (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Aqui definimos telas com opções específicas.
        Estas foram mantidas do seu layout original e funcionarão quando você criar essas telas.
      */}
      <Stack.Screen 
        name="detalhes/[id]" 
        options={{ 
          headerShown: true, // Mostra o cabeçalho nesta tela específica
          title: 'Detalhes da Carga',
          headerBackTitle: 'Voltar'
        }} 
      />
      <Stack.Screen 
        name="postar" 
        options={{ 
          presentation: 'modal', // Apresenta a tela como um modal (de baixo para cima)
          headerShown: true,
          title: 'Publicar Nova Carga'
        }} 
      />
    </Stack>
  );
}