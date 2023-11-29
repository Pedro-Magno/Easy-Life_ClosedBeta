import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { firebaseAuth } from '../../helpers/firebaseConfig';
import styles from './style';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const loginFirebase = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid } = user;
        navigation.navigate('Home', { idUser: uid })
      })
      .catch((error) => {
        setErrorLogin(true);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user;
        navigation.navigate('Home', { idUser: uid })
      }
    });
  }, []);

  return (
    <ImageBackground
      source={require('../../../assets/bgs/bg-app.png')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.titleLogin}>Easy Life </Text>
        <Text style={styles.title}>Login </Text>
        <TextInput
          id="inputname"
          style={styles.input}
          placeholder="enter your email"
          type="text"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="enter your password"
          secureTextEntry={true}
          type="text"
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        {(errorLogin) ? (
          <View style={styles.contentAlert}>
            <MaterialCommunityIcons
              name='alert-circle'
              size={24}
              color='#bdbdbd'
            />
            <Text style={styles.warningAlert}>Invalid email or password !!! </Text>
          </View>
        ) : (
          <></>
        )}
        {(email === "" || password === "") ? (
          <TouchableOpacity
            style={styles.buttonLoginDisabled}
            disabled={true}
          >
            <Text style={styles.textButtonLogin}>Entrar </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={loginFirebase}
          >
            <Text style={styles.textButtonLogin}>Entrar </Text>
          </TouchableOpacity>
        )}
        <Text style={styles.registration}>
          Não é cadastrado ainda?
          <Text
            style={styles.linkSubscribe}
            onPress={() => navigation.navigate('Cadastro')}
          >
            criar perfil </Text>
        </Text>
        <View style={{ height: 100 }} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
