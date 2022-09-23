import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Detalhes(props) {

let timer = null;
let seconds = 3;

const [numero, setNumero] = useState(3);
const [progress, setProgress] = useState(props);

useEffect(()=>{
  timer = setInterval(() => {
    seconds--;
    if (seconds == 0) {
      setProgress(props.fechar);
      clearInterval(timer)
    }
    let format = seconds
    setNumero(format);
}, 1000);
},[])

 return (
   <View style={styles.container}>
       <View style={styles.modalContainer}>
          <View style={styles.btnVoltar}>
            <Text style={{color:'black', fontSize:150}}>{numero}</Text>
          </View>
       </View>
   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'#808080',
  },
  modalContainer:{
    height: 300,
    width: 300,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#808080',
  }
})