import React, { useEffect, useState, useCallback } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Fontisto';
import { getScore, saveScore } from '../utils/storage';
import { SINGLE_5S_HIGH_SCORE_STORAGE_KEY,SINGLE_10S_HIGH_SCORE_STORAGE_KEY, FRENETICO_HIGH_SCORE_STORAGE_KEY } from '../utils/storageKeys';

export default function Resultado({ route }) {
  const navigation = useNavigation()
  const [result, setResult] = useState(0)
  const [best, setBest] = useState(0)

  function getStorageKey() {
    const {mode} = route.params

    switch(mode) {
      case '5s':
        return SINGLE_5S_HIGH_SCORE_STORAGE_KEY
      case '10s':
        return SINGLE_10S_HIGH_SCORE_STORAGE_KEY
      case 'frenetico':
        return FRENETICO_HIGH_SCORE_STORAGE_KEY
      default:
        return FRENETICO_HIGH_SCORE_STORAGE_KEY
    }
  }

  async function getHighScore() {
    const storageKey = getStorageKey()
    const currentResult = route.params.paramKey
    setResult(currentResult)

    let highScore = await getScore(storageKey)

    if (currentResult > highScore) {
      saveScore(storageKey, currentResult)
      highScore = currentResult
    }

    setBest(highScore)
  }

  useEffect(() => {
    getHighScore()
  }, [])
  

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.tituloText}>Melhor pontuação</Text>
        <Text style={styles.tituloText}>{best}</Text>
        <Text style={styles.tituloText}>Sua pontuação</Text>
        <Text style={styles.resultText}>{result}</Text>

        <View style={styles.viewBtn}>

          <TouchableOpacity style={styles.viewBack} onPress={() => navigation.navigate('Modo1')}>
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
    marginLeft:'2%',
    marginRigth:'2%',
  },
  tituloText: {
    textAlign:'center',
    fontFamily: 'Antonio-Bold',
    fontSize: 45,
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