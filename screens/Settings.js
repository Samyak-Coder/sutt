import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import TaskBtn from '../components/taskBtn'
import {LeftHeader, RightHeader} from '../components/headerBtn'

export default function Settings({navigation}) {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Go to gym', type: 'daily', completed: false },
    { id: '2', title: 'Study React Native', type: 'todo', completed: false },
    { id: '3', title: 'Drink water', type: 'habit', completed: false },
  ]);
  
  const [gold, setGold] = useState(100);
  const [xp, setXp] = useState(0);
  
  navigation.setOptions({
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#19171c',
    },
    headerTintColor: '#f6f6f5',
    headerTitleStyle:{fontSize: 25},
    headerRight:()=>(
      <RightHeader/> 
    ),
    headerLeft:()=>(
      <LeftHeader />
    )
  })

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Text style={styles.title}>⚔️ Task Quest</Text>
      <View style={styles.head1}>
      <Text style={{color: 'white'}}>  Level 1</Text>
      <Text style={{color: 'white',}}>💰 {gold}  | ⭐ {xp}  </Text>
      </View>
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskBtn item={item}/>
        //  {console.log(item)}
        )}
      />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#19171c',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  },
  head1: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 20,
  },
});
