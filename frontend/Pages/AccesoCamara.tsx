import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as ImagePicker from "expo-image-picker";

export default function AccesoCamara() {
    const abrirGaleria = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled) {

      }
    };


    const abrirCamara = async () => {
        let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
        });
        if (!result.canceled) {
        
        }
    };



return (
  <>
          <View >
            <Text >Agregar Logo Personalizado</Text>
            <TouchableOpacity onPress={abrirCamara}>
              <Text style={styles.btnText}>Tomar foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGreen} onPress={abrirGaleria}>
              <Text style={styles.btnText}>Seleccionar de galería</Text>
            </TouchableOpacity>
          </View>
  </> 
)}


const styles = StyleSheet.create({
btnGreen: { backgroundColor: "green", padding: 12, borderRadius: 12 },
  btnText: { color: "white", fontWeight: "bold", textAlign: "center" },
});
