import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { modeloStyles as s, base } from "../Estilo/SeleccionModeloStyle";
import { useNavigation } from "@react-navigation/native";

const MODELOS = [
  { id: "1", nombre: "Polo" },
  { id: "2", nombre: "Cuello V" },
  { id: "3", nombre: "Deportiva" },
  { id: "4", nombre: "Cuello O" },
];

export default function SeleccionModelo() {
  const navigation = useNavigation();
  const [seleccion, setSeleccion] = useState<string | null>(null);

  return (
    <View style={base.screen}>
      <Text style={base.title}>Selecciona el modelo</Text>

      <ScrollView contentContainerStyle={s.grid}>
        {MODELOS.map((m) => (
          <TouchableOpacity
            key={m.id}
            style={[s.cardBox, seleccion === m.id && { borderColor: "#111" }]}
            onPress={() => setSeleccion(m.id)}
            onLongPress={() => navigation.navigate("SeleccionColor" as never, { modelo: m.nombre } as never) }
          >
            <Image source={{ uri: `https://picsum.photos/seed/modelo${m.id}/200` }} style={s.image} />
            <Text style={base.cardTitle}>{m.nombre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {seleccion && (
        <TouchableOpacity
          style={base.buttonPrimary}
          onPress={() =>
            navigation.navigate("SeleccionColor" as never, {
              modelo: MODELOS.find((x) => x.id === seleccion)?.nombre,
            } as never)
          }
        >
          <Text style={base.buttonPrimaryText}>Continuar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
