// export default Header;
import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, TextInput, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import styles from './style';

const chatICon = require('../../../assets/icons/icon-ChatGPT.png');

const Header = ({ showKeyButton = false, setChatKey }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleKeySubmit = () => {
    // Lógica para salvar a chave do ChatGPT
    setChatKey(''); // Aqui você deve implementar a lógica para salvar a chave
    closeModal();
  };

  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerLeft}>
        <View style={styles.iconNav}>
          <TouchableOpacity onPress={openDrawer}>
            <Feather name="list" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerRight}>
        {showKeyButton && (
          <View style={styles.buttonChat}>
            <TouchableOpacity onPress={openModal}>
              <Feather name="key" size={30} color="white"/>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.iconFAQ}>
          <TouchableOpacity onPress={() => navigation.navigate('Suporte')}>
            <Feather name="tool" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.iconUser}>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <Feather name="user" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal para inserir a chave do ChatGPT */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
        style={styles.modalHeader}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.containerTextChat}>
              <Image source={chatICon} style={{ width: 40, height: 40, left: 0}} />
              <Text style={styles.modalTitle}>Input your ChatGPT API key</Text>
            </View>
            <TextInput
              style={styles.modalInput}
              placeholder="Your Token Here"
              on
              ChangeText={(text) => setChatKey(text)}
            />
            <View style={styles.containerButonsModal}>
              <TouchableOpacity style={styles.modalButton} onPress={handleKeySubmit}>
                <Text style={styles.modalButtonText}>Confirm </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>Cancelar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Header;
