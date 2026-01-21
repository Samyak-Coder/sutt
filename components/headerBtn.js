import {StyleSheet, Text, View, TouchableOpacity,  Modal } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useState} from 'react'
import AddTask from './addTask'
export function LeftHeader(){
  return(
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={{margin: 5, paddingLeft: 10}}>
      <Ionicons name="filter" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft: 15, paddingRight: 5}}>
      <FontAwesome6 name="magnifying-glass" size={23} color="white" />
      </TouchableOpacity>
      </View>
  )
}

export function RightHeader({screen}) {
  const [visible, setVisible] = useState(false)
  return (
    <View>
      <TouchableOpacity style={{ margin: 5, paddingRight: 10 }} onPress={()=>setVisible(true)}>
        <FontAwesome6 name="add" color="white" size={30} />
      </TouchableOpacity>
      <Modal
      visible={visible}
      onRequestClose = {()=> setVisible(false)}
      animationType = 'slide'
      presentationStyle = "formSheet"
      >
      <AddTask />
      </Modal>
    </View>
  );
}

