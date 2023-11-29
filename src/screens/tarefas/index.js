// src/screens/tarefas/index.js
import { Feather } from '@expo/vector-icons';
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Header from '../../components/header';
import { db, firebaseAuth } from '../../helpers/firebaseConfig';
import { maskDate, maskTime } from '../../helpers/masks';
import styles from './style';

const TarefasScreen = ({ navigation, route}) => {
  const { idUser } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState({
    nome: '',
    data: '',
    horaInicio: '',
    horaFim: '',
    taskID: '',
  });
  const [newTaskEdit, setNewTaskEdit] = useState({
    nome: '',
    data: '',
    horaInicio: '',
    horaFim: '',
    taskID: '',
  });
  const [userData, setUserData] = useState({
    tasks: []
  });

  const generateUniqueID = () => {
    // Obtém o timestamp atual
    const timestamp = new Date().getTime();
  
    // Gera um valor aleatório entre 0 e 9999
    const randomValue = Math.floor(Math.random() * 10000);
  
    // Concatena o timestamp e o valor aleatório para criar o ID único
    const uniqueID = `${timestamp}${randomValue}`;
  
    return uniqueID;
  };
  

  // CRUD :
  // ADICIONAR UMA TAREFA =========================================== :
  const handleAddTask = () => {
    setModalVisible(true);
  };

  const adicionarTarefa = async () => {
    if (novaTarefa.nome && novaTarefa.data && novaTarefa.horaInicio && novaTarefa.horaFim) {
      const tarefaFormatada = {
        ...novaTarefa,
        horaInicio: maskTime(novaTarefa.horaInicio),
        horaFim: maskTime(novaTarefa.horaFim),
      };
  
      // Verificar se a tarefa já existe (edição) ou é uma nova tarefa (adição)
      const tarefaExistenteIndex = userData.tasks.findIndex((task) => task.taskID === novaTarefa.taskID);
  
      if (tarefaExistenteIndex !== -1) {
        // Editar tarefa existente
        userData.tasks[tarefaExistenteIndex] = tarefaFormatada;
      } else {
        const newTaskID = generateUniqueID(); // função para gerar IDs únicos
        userData.tasks.push({ ...tarefaFormatada, taskID: newTaskID });
      }
  
      // Atualizando o documento no Firestore
      const userDocRef = doc(db, "Users", idUser);
  
      await updateDoc(userDocRef, {
        tasks: userData.tasks,
      });
  
      setModalVisible(false);
      setNovaTarefa({
        nome: '',
        data: '',
        horaInicio: '',
        horaFim: '',
        taskID: '',
      });
    }
  };  

  // EDITAR UMA TAREFA ============================================== :
  const handleEditTask = async (taskID) => {
    const tarefaSelecionada = userData.tasks.find((task) => task.taskID === taskID);
    setNewTaskEdit({ ...tarefaSelecionada });
    setModalEditVisible(true);
    console.log('taskID EDIT===', taskID);
  };
  
  const editarTarefa = async () => {
    if (
      newTaskEdit.nome &&
      newTaskEdit.data &&
      newTaskEdit.horaInicio &&
      newTaskEdit.horaFim &&
      newTaskEdit.taskID
    ) {
      const tarefaFormatada = {
        ...newTaskEdit,
        horaInicio: maskTime(newTaskEdit.horaInicio),
        horaFim: maskTime(newTaskEdit.horaFim),
      };

      const tarefaExistenteIndex = userData.tasks.findIndex(
        (task) => task.taskID === newTaskEdit.taskID
      );

      if (tarefaExistenteIndex !== -1) {
        userData.tasks[tarefaExistenteIndex] = tarefaFormatada;

        const userDocRef = doc(db, "Users", idUser);

        await updateDoc(userDocRef, {
          tasks: userData.tasks,
        });

        setModalEditVisible(false);
        setNewTaskEdit({
          nome: '',
          data: '',
          horaInicio: '',
          horaFim: '',
          taskID: '',
        });
      }
    }
  };
  

  // DELETAR UMA TAREFA ============================================= :
  const excluirTarefa = async (taskID) => {
    const tarefasFiltradas = userData.tasks.filter((task) => task.taskID !== taskID);
  
    const userDocRef = doc(db, "Users", idUser);
  
    try {
      await updateDoc(userDocRef, {
        tasks: tarefasFiltradas,
      });
  
      setUserData({
        ...userData,
        tasks: tarefasFiltradas,
      });
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };
  
  const handleDeleteTask = async (taskID) => {
    await excluirTarefa(taskID);
  };  
    

  // LER OS DADOS  =================================================== :       
  const getDocsFirebase = async (q) => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const dataQuery = doc.data();
      //  console.log('dataQuery ===', dataQuery)
      //  console.log('doc ===', doc)
      setUserData(dataQuery)
      return dataQuery;
    })
  }
  
  useEffect(() => {
    const user = firebaseAuth.currentUser.email;
    const docRef = collection(db, "Users");
    const q = query(docRef, where("email", "==", user));
    const data = getDocsFirebase(q)
  }, [])

  return (
    <ImageBackground
      source={require('../../../assets/bgs/bg-app.png')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.containerTarefas}>
            <Header title="Cronograma Semanal " onAddPress={handleAddTask} />
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Cronograma Semanal</Text>
              <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
                <Feather name="plus" size={18} color="black" />
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.groupTask}>
                {userData.tasks.map((task, index) => (
                  <View style={styles.containerTask} key={index}>
                    <View style={styles.containerTaskDesc}>
                      <Text style={styles.titleTask}>{task.nome} </Text>
                      <View style={styles.textDescription}>
                        <Text style={styles.textTask}>{task.data} </Text>
                        <Text style={styles.textTask}>{task.horaInicio} - {task.horaFim}  </Text>
                      </View>
                    </View>
                    <View style={styles.containerTaskIcons}>
                      <TouchableOpacity onPress={() => handleEditTask(task.taskID)}>
                        <Feather name="edit" size={24} color="gray" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleDeleteTask(task.taskID)}>
                        <Feather name="trash-2" size={24} color="red" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* Modal para adicionar nova tarefa */}
            <Modal visible={modalVisible} animationType="slide">
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Nova Tarefa</Text>
                  <TextInput
                    style={styles.modalTextInput}
                    placeholder="Nome da atividade"
                    onChangeText={(text) => setNovaTarefa({ ...novaTarefa, nome: text })}
                    value={novaTarefa.nome}
                  />
                  <TextInput
                    style={styles.modalTextInput}
                    placeholder="Data (DD/MM/YYYY)"
                    onChangeText={(text) => setNovaTarefa({ ...novaTarefa, data: maskDate(text) })}
                    value={novaTarefa.data}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.modalTextInput}
                    placeholder="Horário de início (HH:MM)"
                    onChangeText={(text) => setNovaTarefa({ ...novaTarefa, horaInicio: maskTime(text) })}
                    value={novaTarefa.horaInicio}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.modalTextInput}
                    placeholder="Horário de término (HH:MM)"
                    onChangeText={(text) => setNovaTarefa({ ...novaTarefa, horaFim: maskTime(text) })}
                    value={novaTarefa.horaFim}
                    keyboardType="numeric"
                  />
                  <View style={styles.modalButtonsContainer}>
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={adicionarTarefa}
                    >
                      <Feather name='user-plus' size={20} color={'white'}/>
                      <Text style={styles.modalButtonText}>Adicionar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={() => setModalVisible(false)}
                    >
                      <Feather name='shield-off' size={20} color={'white'}/>
                      <Text style={styles.modalButtonText}>Cancelar  </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            {/* Modal para editar tarefa */}
            <Modal visible={modalEditVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Editar Tarefa</Text>
                <TextInput
                  style={styles.modalTextInput}
                  placeholder="Nome da atividade"
                  onChangeText={(text) => setNewTaskEdit({ ...newTaskEdit, nome: text })}
                  value={newTaskEdit.nome}
                />
                <TextInput
                    style={styles.modalTextInput}
                    placeholder="Data (MM/DD//YYYY)"
                    onChangeText={(text) => setNewTaskEdit({ ...newTaskEdit, data: maskDate(text) })}
                    value={maskDate(newTaskEdit.data)}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.modalTextInput}
                    placeholder="Horário de início (HH:MM)"
                    onChangeText={(text) => setNovaTarefa({ ...newTaskEdit, horaInicio: maskTime(text) })}
                    value={newTaskEdit.horaInicio}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.modalTextInput}
                    placeholder="Horário de término (HH:MM)"
                    onChangeText={(text) => setNovaTarefa({ ...newTaskEdit, horaFim: maskTime(text) })}
                    value={newTaskEdit.horaFim}
                    keyboardType="numeric"
                  />                
                <View style={styles.modalButtonsContainer}>
                  <TouchableOpacity style={styles.modalButton} onPress={editarTarefa}>
                    <Feather name='save' size={20} color={'white'}/>
                    <Text style={styles.modalButtonText}>Salvar </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setModalEditVisible(false)}
                  >
                    <Feather name='shield-off' size={20} color={'white'}/>
                    <Text style={styles.modalButtonText}>Cancelar </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default TarefasScreen;
