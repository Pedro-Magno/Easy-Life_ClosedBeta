import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/header';
import styles from './style.js';
// import { OPENAI_KEY } from '@env';

const profileImg = require('../../../assets/icons/profile-img.png');
const chatProfile = require('../../../assets/icons/icon-ChatGPT.png');

const SuporteScreen = () => {
  // const [chatKey, setChatKey] = useState('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');
  const [modalVisible, setModalVisible] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [ data, setData ] = useState([])

  const instance = axios.create({
    baseURL: 'https://api.openai.com/v1/completions',
  });

  const getChatReply = async (message) => {
    const apiKey = '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';
    if (!apiKey) {
      throw new Error("API key not found");
    }
  
    const prompt = `User: ${message}\n AI:`;
    const data = {
      prompt,
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
  
    try {
      const response = await instance.post("", data, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      // console.log('response ===', response.data.choices[0].text.trim());
      const chatResponse = response.data.choices[0].text.trim();

      setData((prevData) => [...prevData, { type: 'user', text: message }, { type: 'bot', text: chatResponse }]);
      setChatMessages([]);
    } catch (error) {
      console.error("Error fetching AI reply:", error);
      return "Error fetching AI reply.";
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require('../../../assets/bgs/bg-app.png')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // style={styles.keyboardAvoidingContainer}
        keyboardVerticalOffset={80}
      >
        <ScrollView style={{width: '100%'}}>
        <View>
          <Header
            setChatKey={''}
            showKeyButton={true}
          >
          </Header>
            <View style={styles.containerSuporte}>
              <View style={styles.containerChat}>
                <FlatList
                  data={data}
                  keyExtractor={(item, index) => index.toString()}
                  style={styles.containerChatBox}
                  renderItem={({ item }) => (
                    <View style={{flexDirection:"column", padding:10, gap:5, flexWrap: 'nowrap'}}>
                      <View style={styles.containerTextChat}>
                        <Image source={item.type === 'user' ? profileImg : chatProfile} style={{ width: 30, height: 30 }} />
                        <Text style={{fontWeight: 'bold', fontSize: 15, color: item.type === 'user' ? '#233142' : '#BE6100'}}>
                          {item.type === 'user' ? 'Usuário : ' : 'chatBOT : '}
                        </Text>
                      </View>
                      <Text style={{ fontSize: 12, textAlign: 'justify', backgroundColor: 'white', color: item.type === 'user' ? '#233142' : '#BE6100'}}>
                        {item.text}
                      </Text>
                    </View>
                  )}
                />
                <View style={styles.chatInputContainer}>
                  <TextInput
                    style={styles.chatInput}
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor={'gray'}
                    value={chatMessages}
                    onChangeText={(text) => setChatMessages(text)}
                    multiline={true}
                    onContentSizeChange={(e) => e.nativeEvent.contentSize.height}
                  />
                  <TouchableOpacity style={styles.buttonSend} onPress={() => getChatReply(chatMessages)}>
                    <Feather name='send' size={40} color='white'/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </View>

        {/* Modal para inserir a chave do ChatGPT */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Insira a chave do ChatGPT</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Chave do ChatGPT"
                // onChangeText={(text) => setChatKey(text)}
              />
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Enviar </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>Cancelar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        </ScrollView>
      </KeyboardAvoidingView> 
    </ImageBackground>
  );
};

export default SuporteScreen;
