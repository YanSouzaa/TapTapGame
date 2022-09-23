import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Modo2() {



    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.viewTitulo}>
                <Text style={styles.textTitulo}>Modo de jogo</Text>
            </View>
             <TouchableOpacity onPress={() => navigation.navigate('Play2N')} style={styles.viewBtn}>
                <Text style={styles.textBtn}>Normal</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigation.navigate('Play2F')} style={styles.viewBtn}>
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
        backgroundColor:'#808080',
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
    textBtn:{
        fontSize:40,
        fontFamily:'Antonio-Bold',
        marginTop:10,
    },
    viewBtn:{
        marginTop:'15%',
    }

})