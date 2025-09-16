import React, { useState } from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
export default function SeleccionColor() {
  const [colores] = useState<string[]>(
   ["white", "black", "red", "blue", "green", "yellow"]
)
    return (
  <>
    <View>
      <Text>Elige un color</Text>
      <View>
        {colores.map((c, idx) => (
            <TouchableOpacity
            key={idx}
            style={[styles.colorCircle, { backgroundColor: c }]}
         
            />
        ))}
      </View>
    </View>
  </> 
  )
}

const styles = StyleSheet.create({
  colorCircle: { width: 50, height: 50, borderRadius: 25, margin: 10, borderWidth: 1 },
});