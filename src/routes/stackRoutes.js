// src/routes/stackRoutes.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import LoginScreen from '../screens/login';
import DrawerRoutes from './drawerRoutes';
import CadastroScreen from '../screens/cadastro';
import TarefasScreen from '../screens/tarefas';

const Stack = createStackNavigator();

const StackRoutes = ({navigation, route}) => {
  // console.log('stackRoutes ===', route)
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Tarefas') {
            iconName = 'list';
          } else if (route.name === 'Agenda') {
            iconName = 'calendar';
          } else if (route.name === 'Suporte') {
            iconName = 'message-square';
          } else if (route.name === 'Dashboard') {
            iconName = 'pie-chart';
          } else if (route.name === 'Perfil') {
            iconName = 'user';
          } else if (route.name === 'Home') {
            iconName = 'home';
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={DrawerRoutes} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
