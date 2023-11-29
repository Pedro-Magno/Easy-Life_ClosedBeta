// src/screens/cadastro/index.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import styles from './style';
import { db, firebaseAuth } from '../../helpers/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";

const CadastroScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addFirestore = async (userID) => {
    const newData = { 
      email,
      password,
      dataNascimento: '',
      site: '',
      photoURL: '',
      displayName: '',
      tasks: [],
    }

    const userDocRef = doc(db, "Users", userID);

    try {
      await setDoc(userDocRef, newData);
      console.log('Documento criado com o ID: ', userID);
    } catch (error) {
      console.error('Erro ao criar documento no Firebase: ', error);
    }
  }

  const registerFirebase = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const userID = userCredential.user.uid;
      addFirestore(userID);
      console.log('userCreated :', userID);
      navigation.navigate('Home', { userID })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorCode ===', errorCode)
      console.log('errorMessage ===', errorMessage)
    });
  }

  return (
    <ImageBackground
      source={require('../../../assets/bgs/bg-app.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.containerLogin}>
        <Text style={styles.titleLogin}>Easy Life </Text>
        <Text style={styles.subtitleLogin}>Cadastro </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.buttonLogin} onPress={registerFirebase}>
          <Text style={styles.textButtonLogin}>Cadastrar </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textButtonLogin}>Voltar para o login </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CadastroScreen;
