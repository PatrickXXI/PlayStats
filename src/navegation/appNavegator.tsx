// Instalar as seguintes dependências:

// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install react-native-screens react-native-safe-area-context
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Login from '../pages/login';
import CadastrarTimeP from '../pages/cadastrarTimeP';
import Opcoes from '../pages/Opcoes';
import CadastrarJogador from '../pages/cadastrarJogador';
import CadastrarTimeA from '../pages/cadastrarTimeA';
import CadastroJogo from '../pages/cadastroJogo';
import DadosTime from '../pages/dadosTime';
import DadosTimeUser from '../pages/dadosTimeUser';
import ArtilhariaUser from '../pages/artilhariaUser';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="fazerLogin" component={Login} />
        <Stack.Screen name="cadastrarTime" component={CadastrarTimeP} />
        <Stack.Screen name="menuOpcoes" component={Opcoes} />
        <Stack.Screen name="cadastrarJogador" component={CadastrarJogador} />
        <Stack.Screen name="cadastrarTimeA" component={CadastrarTimeA} />
        <Stack.Screen name="cadastrarJogo" component={CadastroJogo} />
        <Stack.Screen name="dadosTime" component={DadosTime} />
        <Stack.Screen name="dadosTimeUser" component={DadosTimeUser} />
        <Stack.Screen name="listaArtilhariaUser" component={ArtilhariaUser} />

      </Stack.Navigator>
  );
};

export default AppNavigator;