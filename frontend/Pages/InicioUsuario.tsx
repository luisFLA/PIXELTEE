import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { inicioUsuarioStyles as s, base } from "../Estilo/InicioUsuarioStyle";
import { useNavigation } from "@react-navigation/native";

export default function InicioUsuario() {
  const navigation = useNavigation();
  return (
    <View style={base.screen}>
      <Text style={base.title}>Inicio</Text>

      <View style={base.card}>
        <Text style={base.cardTitle}>Bienvenido/a</Text>
        <Text style={base.cardText}>Empieza creando tu diseño de camiseta.</Text>
      </View>

      <TouchableOpacity
        style={base.buttonOutline}
        onPress={() => navigation.navigate("SeleccionModelo" as never)}
      >
        <Text style={base.buttonOutlineText}>Crear diseño</Text>
      </TouchableOpacity>
    </View>
  );
}
