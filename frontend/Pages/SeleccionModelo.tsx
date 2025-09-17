import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ModeloCamisa } from '../Modelos/ModeloCamisa'
export default function SeleccionModeloCamisa() {
  const [modeloCammisa] = useState<ModeloCamisa[]>([
    { id: "1", nombre: "Polo", img: "" },
    { id: "2", nombre: "Camiseta cuello V", img: "" },
    { id: "3", nombre: "Deportiva", img: "" },
    { id: "4", nombre: "Camiseta cuello O", img: "" },
  ])
    return (
  <>
    <View>
      <Text>Selecciona el modelo</Text>
      <ScrollView>
        {modeloCammisa.map((m) => (
            <TouchableOpacity key={m.id}>
            <Image source={{ uri: m.img }} style={{ width: 100, height: 100 }} />
            <Text>{m.nombre}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </> 
  )
}