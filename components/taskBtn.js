import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';

export default function TaskBtn({item}){
  return(
    <View style={styles.btnContainer}>
          <View>
          <TouchableOpacity style ={styles.addBtn}>
            <FontAwesome6 
            name="add" 
            size={18} 
            color="white" 
            style={{backgroundColor:'#db8f23', padding: 5, borderRadius: '50%'}}/>
          </TouchableOpacity>
          </View>
          <View style = {{flex: 1}}>
          <TouchableOpacity
          style = {styles.btn1}
          >
          <Text style={{color: 'white'}}>{item.title}</Text>
          </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style ={styles.subsBtn}>
            <FontAwesome6 
            name="minus" 
            size={18} 
            color="#2f2b33" 
            style={{backgroundColor:'#1f1d29', padding: 2, borderRadius: '50%', border: 'solid', borderColor: '#2f2b33'}}/>
          </TouchableOpacity>
          </View>
          </View>
  )
}

const styles = StyleSheet.create({
  btnContainer:{
    display: 'flex',
   width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  },
  btn1:{
    backgroundColor: '#201e2a',
    // color: 'white',
    padding: 15,
    
  },
  addBtn:{
    backgroundColor: '#dba552',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  subsBtn:{
    backgroundColor: '#1f1d29',
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerBtn:{
    margin: 5,
  },
});
