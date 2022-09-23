import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

import Detalhes from './Detalhes';

let timer = null;
let seconds = 10;


export default function Play2N({ sairModal }) {

  useEffect(()=>{
    seconds = 10
    setNumero(10)
    abrirModal()
   
  },[])

  useEffect(() => {
    if (seconds == 0) {
      navigation.navigate('Resultado2N', { paramKey: handleButton1, paramKey2: handleButton2 })
    }
  }, [seconds])
  //Toda vez que atulaiza o colchete o useeffect roda

  const [handleButton1, setHandleButton1] = useState(0);
  const [handleButton2, setHandleButton2] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal() {
    setModalVisible(true);
  }

  function sairModal() {
    setModalVisible(false);
    go()
  }

  function touch1() {
    setHandleButton1(x => x + 1)
  }
  function touch2() {
    setHandleButton2(x => x + 1)
  }

  const [botao, setbotao] = useState('Play')
  const [ultimo, setultimo] = useState('')
  const [numero, setNumero] = useState(5);

  function go() {
    timer = setInterval(() => {
      seconds--;
      if (seconds == 0) {
        clearInterval(timer)
       
      }
      let format = seconds
      setNumero(format);
    }, 1000);
  }


  const navigation = useNavigation();


  return (
    <View style={styles.container}>

      <Modal transparent={true} animationType="none" visible={modalVisible}>
        <Detalhes fechar={sairModal} />
      </Modal>
      <View style={styles.btnarea}>
      </View>
      <View style={styles.areaultima}>
      </View>

      <TouchableOpacity style={styles.viewBtn2} onPress={touch2}>
      </TouchableOpacity>
      <Text style={styles.timer} > {numero} </Text>
       <TouchableOpacity style={styles.viewBtn} onPress={touch1}>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080'
  },
  viewBtn: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  viewBtn2: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom:30,
  },
  timer: {
    fontFamily: 'Antonio-Bold',
    fontSize: 60,
    marginBottom:25,
  }

})