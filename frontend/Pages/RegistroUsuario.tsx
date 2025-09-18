import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, Alert,
  KeyboardAvoidingView, Platform, SafeAreaView, StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { registroStyles } from "../Estilo/registrostyle";

export default function RegistroUsuario() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");

  async function registroUsuario() {
    if (!nombre || !contraseña || !correo || !direccion) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!emailOk) {
      Alert.alert("Correo inválido", "Ingresa un correo válido.");
      return;
    }
    try {
      const resp = await fetch("http://192.168.1.38:5000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, contraseña, correo, direccion }),
      });
      const data = await resp.json();
      if (data.success) {
        Alert.alert("Registro exitoso", "Ahora puedes continuar.");
        navigation.navigate("InicioUsuario" as never);
      } else {
        Alert.alert("Error", "No se pudo registrar.");
      }
    } catch {
      Alert.alert("Error de conexión", "Verifica tu red.");
    }
  }

<<<<<<< Updated upstream
           async function registroUsuario(nombre: string, contraseña:string, correo:string, direccion:string){
                  if (!nombre || !contraseña || !correo || !direccion) {
                  Alert.alert('Error', 'Por favor, completa todos los campos.');
                  return;
              }
          
                      let usuario={
                          nombre:nombre,
                          contraseña:contraseña,
                          correo:correo,
                          direccion:direccion
                          
                      }
                      
                  const respuesta= await fetch('http://localhost:5000/usuarios', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body:JSON.stringify(usuario)
                  });
                      
                  const respuestaApi= await respuesta.json()
          
                  if(respuestaApi.success){
                     Alert.alert('Registro Exitoso')
                     navigation.navigate('InicioUsuario' as never)
                  }else
                   {
                       Alert.alert('Ocurrio un error, credenciales incorrectas')
                  }
              }
=======
>>>>>>> Stashed changes
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <View style={registroStyles.container}>
          <Text style={registroStyles.title}>Crear cuenta</Text>
          <Text style={registroStyles.subtitle}>Únete para continuar</Text>

          <View style={registroStyles.formGroup}>
            <Text style={registroStyles.label}>Nombre</Text>
            <TextInput style={registroStyles.input} placeholder="Tu nombre" placeholderTextColor="#9B9B9B"
              value={nombre} onChangeText={setNombre} />
          </View>

          <View style={registroStyles.formGroup}>
            <Text style={registroStyles.label}>Contraseña</Text>
            <TextInput style={registroStyles.input} placeholder="••••••••" placeholderTextColor="#9B9B9B"
              secureTextEntry value={contraseña} onChangeText={setContraseña} />
          </View>

          <View style={registroStyles.formGroup}>
            <Text style={registroStyles.label}>Correo</Text>
            <TextInput style={registroStyles.input} placeholder="usuario@correo.com" placeholderTextColor="#9B9B9B"
              keyboardType="email-address" autoCapitalize="none" value={correo} onChangeText={setCorreo} />
          </View>

          <View style={registroStyles.formGroup}>
            <Text style={registroStyles.label}>Dirección</Text>
            <TextInput style={registroStyles.input} placeholder="Ciudad, calle y número" placeholderTextColor="#9B9B9B"
              value={direccion} onChangeText={setDireccion} />
          </View>

          <TouchableOpacity style={registroStyles.buttonPrimary} onPress={registroUsuario}>
            <Text style={registroStyles.buttonTextPrimary}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity style={registroStyles.buttonOutline} onPress={() => navigation.navigate("Login" as never)}>
            <Text style={registroStyles.buttonTextOutline}>¿Ya tienes cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
