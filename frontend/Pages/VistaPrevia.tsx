import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'


export default function VistaPrevia() {


return (
  <>
    <View>
        <Text>Vista Previa</Text>
        <Image source={{ uri: "https://via.placeholder.com/200x250"}}></Image>
        <View >
            <TouchableOpacity style={styles.btnGray} >
                <Text>Logo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGray} >
                <Text>Color</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnConfirm}>
                <Text style={styles.btnText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    </View>
  </> 
)}


const styles = StyleSheet.create({
    btnConfirm: { backgroundColor: "green", padding: 12, borderRadius: 12 },
     btnText: { color: "white", fontWeight: "bold", textAlign: "center" },
btnGray: { backgroundColor: "lightgray", padding: 12, borderRadius: 12, marginHorizontal: 4 },
});
