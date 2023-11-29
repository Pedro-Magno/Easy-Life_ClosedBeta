  import React, { useEffect, useState } from 'react';
  import { View, ImageBackground, Text } from 'react-native';
  import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
  import { db, firebaseAuth } from '../../helpers/firebaseConfig';
  import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';
  import Header from '../../components/header';
  import styles from './style';

  const DashboardScreen = () => {
    const [tasks, setTasks] = useState([]);

    const organizeTasksByDate = (tasks) => {    
      // Inicializa variáveis para armazenar o total de horas acumulado por dia
      const dailyTotals = {};
      let totalHoursAccumulated = 0;
    
      // Ordena as tarefas por data
      tasks.sort((a, b) => new Date(a.data) - new Date(b.data));
    
      // Itera sobre as tarefas
      tasks.forEach((task) => {
        const { data, horaInicio, horaFim } = task;
    
        // Calcula o total de horas para a tarefa atual
        const startHour = parseInt(horaInicio.split(':')[0]);
        const startMinute = parseInt(horaInicio.split(':')[1]) || 0;
        const endHour = parseInt(horaFim.split(':')[0]);
        const endMinute = parseInt(horaFim.split(':')[1]) || 0;
    
        const taskHours = endHour - startHour + (endMinute - startMinute) / 60;
    
        // Atualiza o total de horas acumulado
        totalHoursAccumulated += taskHours;
    
        // Atualiza o total de horas acumulado por dia
        if (!dailyTotals[data]) {
          dailyTotals[data] = totalHoursAccumulated;
        } else {
          dailyTotals[data] += taskHours;
        }
      });
    
      // Organiza os dados para o gráfico
      const chartData = Object.entries(dailyTotals).map(([date, total]) => ({
        date,
        totalHours: total,
      }));
    
      // Retorna os dados organizados
      return chartData;
    };

    const processTasksForChart = () => {
      if (!tasks) {
        return [];
      }
    
      // Ordena as tarefas por data
      tasks.sort((a, b) => new Date(a.data) - new Date(b.data));
    
      let totalHoursAccumulated = 0;
    
      const processedData = tasks.map((task) => {
        // Certifique-se de ajustar conforme a estrutura real das suas tarefas
        totalHoursAccumulated = task.totalHours;
        return {
          x: task.date,
          y: totalHoursAccumulated,
        };
      });
    
      return processedData;
    };

    const subscribeToTasks = () => {
      const user = firebaseAuth.currentUser.email;
      const usersRef = collection(db, 'Users');
      const q = query(usersRef, where('email', '==', user));
  
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          const userTasks = userData.tasks || [];
          tasksData.push(...userTasks);
        });
  
        const organizedTasks = organizeTasksByDate(tasksData);
        setTasks(organizedTasks);
      });
  
      return unsubscribe;
    };

    useEffect(() => {
      const unsubscribe = subscribeToTasks();
      return () => unsubscribe();
    }, []);
    
    return (
      <ImageBackground
        source={require('../../../assets/bgs/bg-app.png')}
        style={styles.backgroundImage}
      >
        <View>
          <Header />
          <View style={styles.containerSuporte}>
            <Text style={styles.titleDash}>Dashboard Mensal</Text>
            <View style={styles.containerChart}>
              <VictoryChart theme={VictoryTheme.material}>
                <VictoryLine
                  style={{
                    data: { stroke: '#c43a31' },
                    parent: { border: '1px solid #ccc' },
                  }}
                  data={processTasksForChart()}
                />
              </VictoryChart>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };

  export default DashboardScreen;
