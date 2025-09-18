import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { inicioAdminStyles as s, base } from "../Estilo/InicioAdministradorStyle";

export default function InicioAdministrador() {
  return (
    <View style={base.screen}>
      <Text style={base.title}>Panel administrador</Text>

      <View style={s.actionsRow}>
        <TouchableOpacity style={base.buttonOutline}><Text style={base.buttonOutlineText}>Pedidos</Text></TouchableOpacity>
        <TouchableOpacity style={base.buttonOutline}><Text style={base.buttonOutlineText}>Productos</Text></TouchableOpacity>
        <TouchableOpacity style={base.buttonOutline}><Text style={base.buttonOutlineText}>Usuarios</Text></TouchableOpacity>
      </View>

      <View style={s.listItem}>
        <Text style={base.cardTitle}>Pedido #1001</Text>
        <Text style={base.cardText}>pendiente</Text>
      </View>
      <View style={s.listItem}>
        <Text style={base.cardTitle}>Pedido #1002</Text>
        <Text style={base.cardText}>enviado</Text>
      </View>
    </View>
  );
}
