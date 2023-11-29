import { Feather } from '@expo/vector-icons';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Header from '../../components/header';
import { db, firebaseAuth } from '../../helpers/firebaseConfig';
import styles from './style';

const AgendaScreen = () => {
  const [userTasks, setUserTasks] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const organizeTasksByDate = (tasks) => {
    const organizedTasks = tasks.reduce((acc, task) => {
      const date = task.data;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(task);
      return acc;
    }, {});
    return organizedTasks;
  };

  const loadUserTasks = async () => {
    try {
      const user = firebaseAuth.currentUser.email;
      const usersRef = collection(db, 'Users');
      const q = query(usersRef, where('email', '==', user));
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs[0].data();
      const tasks = userData.tasks || [];

      // Organiza as tarefas por data
      const organizedTasks = organizeTasksByDate(tasks);

      // Atualiza o estado userTasks e markedDates
      setUserTasks(tasks);
      setMarkedDates(organizedTasks);
    } catch (error) {
      console.error('Erro ao carregar tarefas do usuário:', error);
    }
  };

  useEffect(() => {
    loadUserTasks();
  }, []);

  const onDayPress = (day) => {
    const date = day.dateString;
    const formattedDate = `${date.substring(8, 10)}/${date.substring(5, 7)}/${date.substring(0, 4)}`; // Formato: "DD/MM/YYYY"
    setSelectedDate(formattedDate);
  };

  const renderTarefasDoDia = () => {
    if (markedDates[selectedDate]) {
      return (
        <ScrollView>
          {markedDates[selectedDate].map((task, index) => (
            <View style={styles.containerTasksGroup} key={index}>
              <View style={styles.containerTasks}>
                <Feather style={styles.iconTask} name='activity' size={20} color={'green'} />
                <Text style={styles.textTarefaDoDia}>{task.nome} - </Text>
              </View>
              <View style={styles.containerTasks}>
                <Feather style={styles.iconTask} name='alert-circle' size={20} color={'gray'} />
                <Text style={styles.textTarefaDoDia}>{task.horaInicio} às {task.horaFim} </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.containerTasks}>
          <Feather style={styles.iconTask} name='alert-circle' size={20} color={'red'} />
          <Text style={styles.textTarefaDoDia}>Nenhuma tarefa para este dia. </Text>
        </View>
      );
    }
  };

  const renderColoredDays = () => {
    const coloredDays = {};
    for (const [date, tasks] of Object.entries(markedDates)) {
      if (tasks.length > 0) {
        const formattedDate = `${date.substring(6, 10)}-${date.substring(3, 5)}-${date.substring(0, 2)}`;
        // coloredDays[formattedDate] = { selected: true, dot: [{ color: 'orange' }]};
        coloredDays[formattedDate] = { marked: true, selected: true, selectedDotColor: 'orange'};
      }
    }  
    return coloredDays;
  };

  return (
    <ImageBackground source={require('../../../assets/bgs/bg-app.png')} style={styles.backgroundImage}>
      <Header />
      <ScrollView>
        <View style={styles.containerAgenda}>
          <Calendar
            style={styles.calendar}
            onDayPress={onDayPress}
            markedDates={{ ...markedDates, ...renderColoredDays() }}
            markingType={'multi-dot'}
          />

          {selectedDate !== '' && (
            <View style={styles.containerTarefas}>
              <Text style={styles.textDataSelecionada}>{`Atividades em ${selectedDate}`} :</Text>
              {renderTarefasDoDia()}
            </View>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AgendaScreen;
