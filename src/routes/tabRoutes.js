// // src/routes/tabRoutes.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import TarefasScreen from '../screens/tarefas';
import AgendaScreen from '../screens/agenda';
import SuporteScreen from '../screens/suporte';
import DashboardScreen from '../screens/dashboard';

const Tab = createBottomTabNavigator();

const TabRoutes = ({  navigation, route }) => {
  // console.log('routesTabRoutes ===', route);  
  return (
    <Tab.Navigator
      initialRouteName='Atividades'
      initialParams={{ idUser: route.params.idUser }} // Adicione esta linha
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Atividades') {
            iconName = 'list';
          } else if (route.name === 'Agenda') {
            iconName = 'calendar';
          } else if (route.name === 'Suporte') {
            iconName = 'message-square';
          } else if (route.name === 'Dashboard') {
            iconName = 'pie-chart';
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name="Atividades" component={TarefasScreen} initialParams={{ idUser: route.params.idUser }}/>
      <Tab.Screen name="Agenda" component={AgendaScreen} />
      <Tab.Screen name="Suporte" component={SuporteScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
