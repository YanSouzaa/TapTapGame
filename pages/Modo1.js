import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Modo1() {



    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.viewTitulo}>
                <Text style={styles.textTitulo}>Modo de jogo</Text>
            </View>
             <TouchableOpacity onPress={() => navigation.navigate('Play15')} style={{marginTop:'10%'}}>
                <Text style={styles.textBtn}>Record 5s</Text>
            </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('Play110')} style={styles.viewBtn}>
                <Text style={styles.textBtn}>Record 10s</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigation.navigate('Play1F')} style={styles.viewBtn}>
                <Text style={styles.textBtn}>Frenético</Text>
            </TouchableOpacity>





            {/* <Button
        title="Ir para Resultado"
        onPress={() => navigation.navigate('Resultado')}
      /> */}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#808080'
    },
    viewBtn: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    viewTitulo: {
        marginTop: "28%",
    },
    textTitulo:{
        fontSize:48,
        fontFamily:'Antonio-Bold',
        color:'#000',
    },
    viewBtn:{
        marginTop:'10%',
    },
    textBtn:{
        fontSize:40,
        fontFamily:'Antonio-Bold',
        marginTop:10,
    },

})