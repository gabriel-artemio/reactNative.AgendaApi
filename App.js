import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//importando os icones
import Icon from 'react-native-vector-icons/FontAwesome';
//importando as telas
import AgendamentosScreen from './screens/agendamentos';
import ConfiguracaoScreen from './screens/configuracao';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login/index';
import ServicosScreen from './screens/servicos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Agendamentos') {
              iconName = 'calendar';
            } else if (route.name === 'Configuração') {
              iconName = 'cogs';
            } else if (route.name === 'Serviços') {
              iconName = 'briefcase';
            } 
          return <Icon name={iconName} color={color} size={size} />;
        },
      tabBarActiveTintColor: '#c74098',
      tabBarInactiveTintColor: '#808080',
      tabBarStyle:{
        paddingTop:5,
        paddingBottom:5
      }
      })}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarLabel: 'Home',
          headerStyle: {
            backgroundColor: '#c74098',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Tab.Screen 
        name="Agendamentos" 
        component={AgendamentosScreen} 
        options={{ tabBarLabel: 'Agendamentos',
          headerStyle: {
          backgroundColor: '#c74098',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },}}
      />
      <Tab.Screen 
        name="Serviços" 
        component={ServicosScreen} 
        options={{ tabBarLabel: 'Serviços',
          headerStyle: {
            backgroundColor: '#c74098',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
      <Tab.Screen 
        name="Configuração" 
        component={ConfiguracaoScreen} 
        options={{ tabBarLabel: 'Configuração',
          headerStyle: {
            backgroundColor: '#c74098',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}