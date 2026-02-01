import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaProvider, useSafeAreaFrame } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { useHabbitsStore } from '../store/HomeStore';

export default function AddTask({screen}){
  const [tags, setTags] = useState([
    { id: '1', title: 'School', type: 'daily', completed: false },
    { id: '2', title: 'Study React Native', type: 'todo', completed: false },
    { id: '3', title: 'Drink water', type: 'habit', completed: false },
  ]);

  

  const {addHabbit} = useHabbitsStore((state)=> state.addHabbit)

  const [rCBtnPsed, setRCBtnPsed] = useState(false)
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [ctrlPos, setCtrlPos] = useState(false);
  const [ctrlNeg, setCtrlNeg] = useState(false);
  const [resetCont, setResetCont] = useState("");
  const [tags0, setTags0] = useState([]);
  
  return( 
    <View style={styles.container}>

      <View style ={styles.fixedCont} >
        <TouchableOpacity 
        onPress={()=>addHabbit({
          id: Math.random().toString(36).substring(2) + Date.now().toString(36),
          title: title, 
          notes: notes,
          ctrlPos: ctrlPos, 
          ctrlNeg: ctrlNeg,
          resetCont: resetCont,
          tags0: tags0
        })}
        >
        <Text style={{color:'white', fontSize: 15, padding: 10}}>Cancel</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}> New {screen}  </Text>
       <TouchableOpacity >
        <Text style={{color:'white', fontSize: 15, padding: 10}}>Create</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTetxt}>Title</Text>
        <TextInput  
        style={styles.textInput}
        onChangeText={(e) => setTitle(e)} 
        />

        <Text style={styles.inputTetxt}>Notes</Text>
        <TextInput
        style={styles.textInput} 
        onChangeText={(e) => setNotes(e)} 
        multiline
        />
      </View>

      <View style= {styles.ctrlContainer} >
        <Text style={styles.subHeading}>CONTROLS</Text>
        <View style={styles.subCont1}>
          <View style={{alignItems: 'center', paddingLeft: 50}}>
            <TouchableOpacity style={{padding: 5}} onPress={()=>setCtrlPos(!ctrlPos)}>
              <Feather name="plus-circle" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.inputTetxt}>Positive</Text>
          </View>
          <View style={{alignItems: 'center', paddingRight: 50}}>
            <TouchableOpacity style={{padding: 5}} onPress={()=>setCtrlPos(!ctrlNeg)}>
              <Feather name="minus-circle" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.inputTetxt}>Negative</Text>
          </View>
        </View>
      </View>

      <View style= {styles.ctrlContainer} >
        <Text style={styles.subHeading}>RESET COUNTER</Text>
        <View style={styles.subCont1}>
          
            <TouchableOpacity 
            style={[styles.rContBtn, {backgroundColor: rCBtnPsed ? 'purple': '#211e29'} ]} 
            onPress={()=>{setRCBtnPsed(!rCBtnPsed), setResetCont('Daily')}}>
              <Text style={{fontSize: 18, color: 'white'}}>Daily</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.rContBtn, {backgroundColor:  '#211e29' },]} 
            onPress={()=>{setRCBtnPsed(!rCBtnPsed), setResetCont('Weekly')}}>
              <Text style={{fontSize: 18, color: 'white'}}>Weekly</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.rContBtn, {backgroundColor:  '#211e29'} ,]} 
            onPress={()=>{setRCBtnPsed(!rCBtnPsed), setResetCont('Monthly')}}>
              <Text style={{fontSize: 18, color: 'white'}}>Monthly</Text>
            </TouchableOpacity>
            
        
        </View>
      </View>
      
      
      <View style= {styles.ctrlContainer} >
        <Text style={styles.subHeading}>TAGS</Text>
        <View style={{backgroundColor: '#211e29', borderRadius: 5, margin: 5, padding: 5}}>
        <FlatList
        data={tags}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={{borderBottomWidth: 0.5,borderBottomColor: '#a19ea8', marginHorizontal: 10, padding: 2}}
          onPress={()=>setTags0([...setTags0, item.title])}
          >
          <Text style={{color: 'white', fontSize: 15}}> {item.title} </Text>
          </TouchableOpacity>
        )}
      />
      </View>
      </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: '#19171c',
    margin: 0,
    padding: 0,
  },
  fixedCont:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4f2a93',
    padding: 10,
  },
  headerBtn: {
    fontSize: 15
  },
  inputContainer:{
    backgroundColor: "#6331b4",
    padding: 10
  },
  textInput:{
    color: 'white',
    backgroundColor: '#bca8ff',
    borderRadius: 20,
    margin: 10,
    padding: 15
  },
  inputTetxt:{
    color: 'white',
    fontSize: 15
  },
  ctrlContainer:{
    padding: 10,
    marginTop: 10
  },
  subHeading:{
    color: '#a19ea8',
  },
  subCont1:{
    backgroundColor: '#211e29',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  subCont2:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  rContBtn:{
    
    borderRadius: 10,
    padding: 10,
  }
});
