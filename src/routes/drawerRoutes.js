import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { getAuth, signOut } from "firebase/auth";

import TabRoutes from './tabRoutes'
import StackRoutes from './stackRoutes'

import PerfilScreen from '../screens/perfil/';

import styles from './style';

const Drawer = createDrawerNavigator();
const profileImg = require('../../assets/icons/profile-img.png')

export default function DrawerRoutes({ navigation, route }) {
    const navigate = useNavigation()
    const auth = getAuth();
  
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate.navigate("Login")
        }).catch((error) => {
            // An error happened.
        });
    };

    return (
        <>
        <Drawer.Navigator
            initialRouteName='Atividades'
            initialParams={{ idUser: route.params.idUser }}
            drawerContent={(props) => {
                return (
                    <SafeAreaView style={styles.containerHome}>
                        <View style={styles.containerHeader}>
                            <View style={styles.containerImg}>
                                <Image source={profileImg} style={{ width: 50, height: 50 }} />
                            </View>
                            <View style={styles.containerHeaderText}>
                                <Text style={styles.textName}>Nome do Usuário </Text>
                                <Text style={styles.textEmail}>user@example.com</Text>
                            </View>
                        </View>
                        <View style={styles.containerDrawerList}>
                            <DrawerItemList {...props} />
                        </View>
                    </SafeAreaView>
                )
            }}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#D7CFFC',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '75%',
                    height: '95%',
                    borderTopRightRadius: 50,
                    borderTopLeftRadius: 50,       
                    borderBottomRightRadius: 50,
                    marginTop: 25,
                },
                drawerActiveTintColor: false,
                drawerInactiveTintColor: false,                
                drawerActiveBackgroundColor: false,
                drawerInactiveBackgroundColor: false,
            }}
            
            >
            <Drawer.Screen
                name='Atividades'
                component={TabRoutes}
                initialParams={{ idUser: route.params.idUser }}
                options={{
                    drawerIcon: () => {
                        return(
                            <TouchableOpacity style={styles.buttonsHome} onPress={() => navigate.navigate('Atividades')}>
                                <Feather style={ styles.iconButtons } name='activity' size={20} color='black'/>
                                <Text style={styles.textButtons}>Atividades </Text>
                            </TouchableOpacity>
                        )
                    }
                }}
            />
            <Drawer.Screen
                name='Perfil'
                component={PerfilScreen}
                options={{
                    drawerIcon: () => {
                        return(
                            <TouchableOpacity style={styles.buttonsHome} onPress={() => navigate.navigate('Perfil')}>
                                <Feather style={styles.iconButtons}  name='user' size={20} color='black'/>
                                <Text style={styles.textButtons}>Perfil </Text>
                            </TouchableOpacity>
                        )
                    }
                }}
            />
            <Drawer.Screen
                name='Logout'
                component={StackRoutes}
                options={{
                    drawerIcon: () => {
                        return(
                            <TouchableOpacity style={styles.buttonLogout} onPress={() => logout()}>
                                <Feather style={styles.iconButtons}  name='log-out' size={20} color='black'/>
                                <Text style={styles.textButtons}>Logout </Text>
                            </TouchableOpacity>
                        )
                    }
                }}
            />
            <Drawer.Screen
                name='HomeDrawer'
                initialParams={{ idUser: route.params.idUser }}
                component={TabRoutes}
                options={{
                    headerShown: false,
                    drawerLabel: ''
,                }}
            />
        </Drawer.Navigator>
        </>
    );
}

