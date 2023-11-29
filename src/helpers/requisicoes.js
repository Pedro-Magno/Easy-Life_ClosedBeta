// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { firebaseAuth } from './firebaseConfig';

// const auth = getAuth();
// const googleProvider = new GoogleAuthProvider();

// export const login = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       const { uid } = user;
//       // navigation.navigate('home', { uid })
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log('errorCode ===', errorCode);
//       console.log('errorMessage ===', errorMessage);
//     });
// }

// export const loginGoogle = () => {
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       const credential = googleProvider.credentialFromResult(result);
//       const { token } = credential.accessToken;
//       const user = result.user;
//       console.log('user ===', user);
//       console.log('token ===', token);
//       // navigation.navigate('home', { uid })
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.customData.email;
//       const credential = googleProvider.credentialFromError(error);
//       console.log('errorCode ===', errorCode);
//       console.log('errorMessage ===', errorMessage);
//       console.log('email ===', email);
//       console.log('credential ===', credential);
//     });
// }

// export const cadastrarUsuario = (email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log('Novo usuário cadastrado ===:', user);
//       navigation.navigate('Home', { uid })
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log('errorCode ===', errorCode);
//       console.log('errorMessage ===', errorMessage);
//     });
// }
