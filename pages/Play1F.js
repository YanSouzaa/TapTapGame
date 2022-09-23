import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle,withTiming } from 'react-native-reanimated';

import Detalhes from './Detalhes';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window')

let timer = null;
let seconds = 15;

export default function Play110({ sairModal }) {

  const titlePositionX = useSharedValue(0);
  const titlePositionY = useSharedValue(0);

  useEffect(() => {
    seconds = 15
    setNumero(15)
    abrirModal()
  }, [])
  
  useEffect(()=>{
    setInterval(() => {
      titlePositionX.value = withTiming(Math.floor(Math.random() * (WINDOW_WIDTH - 50)), {duration:400});
      titlePositionY.value = withTiming(Math.floor(Math.random() * (WINDOW_WIDTH - 50)), {duration:400});
    },400)
    
  },[])

  const titleStyle = useAnimatedStyle(()=>{
    return {
      transform: [{translateY: titlePositionY.value},{translateX: titlePositionX.value}],
    };
  });

  useEffect(() => {
    if (seconds == 0) {
      navigation.navigate('Resultado', { paramKey: handleButton1, mode: 'frenetico' })
    }
  }, [seconds])
  //Toda vez que atulaiza o colchete o useeffect roda

  const [handleButton1, setHandleButton1] = useState(0);
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

  const [botao, setbotao] = useState('Play')
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
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={styles.container}>
      <Modal transparent={true} animationType="none" visible={modalVisible}>
        <Detalhes fechar={sairModal} />
      </Modal>
      <Text style={styles.timer} > {numero} </Text>

      <View style={styles.areaBtn}>
        <AnimatedTouchable style={[styles.viewBtn, titleStyle]} onPress={touch1}>
        </AnimatedTouchable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#808080'
  },
  areaBtn: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  viewBtn: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  timer: {
    fontFamily: 'Antonio-Bold',
    fontSize: 60,
  }
})