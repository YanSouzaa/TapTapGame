import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Resultado({ route }) {

  const navigation = useNavigation()
  const [result, setResult] = useState('')
  const [result2, setResult2] = useState('')
  
  
  
  useEffect(() => {
    setResult(route.params.paramKey)
    setResult2(route.params.paramKey2)
  }, [])
  
  
  
  
  
  
  
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.tituloText}>Jogador 2</Text>
        <Text style={styles.resultText}>{result2}</Text>
        <Text style={styles.tituloText}>Jogador 1</Text>
        <Text style={styles.resultText}>{result}</Text>

        <View style={styles.viewBtn}>

          <TouchableOpacity style={styles.viewBack} onPress={() => navigation.navigate('Modo2')}>
            <Icon style={styles.iconBack} name="backward" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewHome} onPress={() => navigation.dispatch(StackActions.popToTop)}>
            <Icon style={styles.iconBack} name="home" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#808080',
  },
  modalContainer: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080',
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontFamily: 'Antonio-Bold',
    fontSize: 50,
  },
  resultText: {
    marginTop: 35,
    fontFamily: 'Antonio-Bold',
    fontSize: 50,
  },
  viewBtn: {
    flexDirection: 'row',
    width: 200,
    
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconBack:{
    marginTop:30,
    fontSize:40,
  }
})