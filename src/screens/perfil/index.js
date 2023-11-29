import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db, firebaseAuth } from '../../helpers/firebaseConfig';
import styles from './style';
import { maskDate } from '../../helpers/masks';

const PerfilScreen = ( ) => {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    dataNascimento: '',
    tasks: []
  });
  const profileImg = require('../../../assets/icons/profile-img.png');

  const navigate = useNavigation();

  const getDocsFirebase = async (q) => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      const dataQuery = doc.data();
      setUserData(dataQuery)
      return dataQuery;
    })
  }

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user = firebaseAuth.currentUser.email;
        const usersRef = collection(db, 'Users');
        const q = query(usersRef, where('email', '==', user));
        const data = getDocsFirebase(q)
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
      }
    };
    loadUserData();
  }, []);

  const editarPerfil = async () => {
    try {
      const userUID = firebaseAuth.currentUser.uid;
      const userDocRef = doc(db, 'Users', userUID);

      await updateDoc(userDocRef, {
        displayName: userData.displayName,
        dataNascimento: maskDate(userData.dataNascimento),
        email: userData.email,
        password: userData.password,
        photoURL: userData.photoURL,
        site: userData.site,
      });

      setEditing(false);
      console.log('Perfil atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao editar perfil:', error);
    }
  };

  const cancelarEdicao = () => {
    setEditing(false);
  };

  return (
    <View style={styles.containerProfile}>
      <View style={styles.containerImg}>
        <TouchableOpacity style={styles.containerReturnIcon} onPress={() => navigate.navigate('HomeDrawer')}>
          <Feather name="arrow-left-circle" size={45} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.containerImgProfile}>
          <Image source={profileImg} style={{ width: 120, height: 120 }} />
        </View>
      </View>

      <View style={styles.containerInputs}>
        <Feather style={styles.iconInputs} name="user" size={25} color="#683e75" />
        <TextInput
          style={styles.textUser}
          value={userData.displayName}
          onChangeText={(text) => setUserData((prevData) => ({ ...prevData, displayName: text }))}
          editable={editing}
        />
      </View>

      <View style={styles.containerInputs}>
        <Feather style={styles.iconInputs} name="calendar" size={25} color="#683e75" />
        <TextInput
          placeholder={userData.dataNascimento ? '' : "Data (MM/DD//YYYY)"}
          style={styles.textUser}
          value={maskDate(userData.dataNascimento)}
          onChangeText={(text) => setUserData((prevData) => ({ ...prevData, dataNascimento: text }))}
          editable={editing}
          keyboardType="numeric"

        />
      </View>

      <View style={styles.containerInputs}>
        <Feather style={styles.iconInputs} name="mail" size={25} color="#683e75" />
        <TextInput
          style={styles.textUser}
          value={userData.email}
          onChangeText={(text) => setUserData((prevData) => ({ ...prevData, email: text }))}
          editable={editing}
        />
      </View>

      <View style={styles.containerInputs}>
        <Feather style={styles.iconInputs} name="link" size={25} color="#683e75" />
        <TextInput
          style={styles.textInput}
          value={userData.site}
          onChangeText={(text) => setUserData((prevData) => ({ ...prevData, site: text }))}
          editable={editing}
        />
      </View>

      {editing ? (
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.buttons} onPress={editarPerfil}>
            <Feather name='save' size={20} color={'white'}/>
            <Text style={styles.textButton}>Salvar </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={cancelarEdicao}>
            <Feather name='shield-off' size={20} color={'white'}/>
            <Text style={styles.textButton}>Cancelar </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.buttonEdit} onPress={() => setEditing(true)}>
          <Text style={styles.textButtonEdit}>Editar Perfil </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PerfilScreen;
