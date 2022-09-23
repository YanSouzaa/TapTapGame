import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.viewTitulo}>
                <Text style={styles.textTitulo}>Tap Tap game</Text>
            </View>
             <TouchableOpacity onPress={() => navigation.navigate('Modo1')} style={styles.viewBtn}>
                <Text style={styles.textBtn}>Um jogador</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Modo2')} style={styles.viewBtn}>
                <Text style={styles.textBtn}>Dois jogadores</Text>
            </TouchableOpacity>
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
        marginLeft:'1%',
        marginRigth:'1%',
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