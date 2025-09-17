import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { Usuario } from '../Modelos/Usuario'
import { useNavigation } from '@react-navigation/native';
import { Link } from '@react-navigation/native';

import {
 
  TouchableOpacity,
 
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { loginStyles } from "../Estilo/LoginStyle";

  
export default function Login() {
const navigation = useNavigation();
    const [nombre, setNombre] = useState<string>('')
    const [contraseña, setContraseña] = useState<string>('')
 

    async function login(nombre: string, contraseña:string){
        if (!nombre || !contraseña) {
        Alert.alert('Error', 'Por favor, completa todos los campos.');
        return;
    }

            let usuario: Usuario={
                nombre:nombre,
                contraseña:contraseña
            }
            
        const respuesta= await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(usuario)
        });
            
        const respuestaApi= await respuesta.json()

        if(respuestaApi.success===true && respuestaApi.noUser===false){
            Alert.alert("Login Exitoso")
            navigation.navigate('InicioUsuario' as never) 
        }else if(respuestaApi.noUser===true && respuestaApi.success===false){
            Alert.alert("Login Exitoso")
            navigation.navigate('InicioAdministrador' as never) 
        }else
         {
             Alert.alert('Ocurrio un error, credenciales incorrectas')
        }
    }

    return (
       <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={loginStyles.container}>
          {/* Título limpio, quita el <Text>Login</Text> suelto */}
          <Text style={loginStyles.title}>Inicia Sesión</Text>
          <Text style={loginStyles.subtitle}>Bienvenido de nuevo</Text>

          <View style={loginStyles.formGroup}>
            <Text style={loginStyles.label}>Nombre</Text>
            <TextInput
              style={loginStyles.input}
              placeholder="Tu nombre"
              placeholderTextColor="#9B9B9B"
              value={nombre}
              onChangeText={setNombre}
              autoCapitalize="none"
            />
          </View>

          <View style={loginStyles.formGroup}>
            <Text style={loginStyles.label}>Contraseña</Text>
            <TextInput
              style={loginStyles.input}
              placeholder="••••••••"
              placeholderTextColor="#9B9B9B"
              secureTextEntry
              value={contraseña}
              onChangeText={setContraseña}
            />
          </View>

          {/* Botón primario negro */}
          <TouchableOpacity
            style={loginStyles.button}
            onPress={() => login(nombre, contraseña)}
          >
            <Text style={loginStyles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          {/* Enlace a registro */}
          <TouchableOpacity
            style={{ marginTop: 12 }}
            onPress={() => navigation.navigate("RegistroUsuario" as never)}
          >
            <Text style={loginStyles.link}>¿No tienes cuenta? Regístrate</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
    )
}