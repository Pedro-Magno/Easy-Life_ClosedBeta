// // src/screens/home/index.js
// import React from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import styles from './style';

// const HomeScreen = ({ navigation }) => {
//   const profileImg = require('../../../assets/icons/profile-img.png')
  
//   return (
//     <View>
//       <View style={styles.containerHome}>
//         <View style={styles.containerTop}>
          
//           <View style={styles.containerHeader}>
//             <View style={styles.containerImg}>
//               <Image source={profileImg} style={{ width: 50, height: 50 }} />
//             </View>
//             <View style={styles.containerHeaderText}>
//               <Text style={styles.textName}>Nome do Usuário </Text>
//               <Text style={styles.textEmail}>user@example.com</Text>
//             </View>
//           </View>

//           <View style={styles.containerButtons}>
//             <TouchableOpacity style={styles.buttonsHome} onPress={() => navigation.navigate('Perfil')}>
//               <Feather style={styles.iconButtons} name="user" size={24} color="black" />
//               <Text style={styles.textButtons}>Perfil </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.buttonsHome} onPress={() => navigation.navigate('Tarefas')}>
//               <Feather style={styles.iconButtons} name="layers" size={24} color="black" />
//               <Text style={styles.textButtons}>Grupo de Atividades </Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//         <View style={styles.containerBottom}>
//           <TouchableOpacity style={styles.buttonsHome} onPress={() => navigation.navigate('Login')}>
//             <Feather style={styles.iconButtons} name="log-out" size={24} color="black" />
//             <Text style={styles.textButtons}>Logout </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// export default HomeScreen;
