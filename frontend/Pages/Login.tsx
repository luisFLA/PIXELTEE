import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { loginStyles } from "../Estilo/LoginStyle";

export default function Login() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState<string>("");
  const [contraseña, setContraseña] = useState<string>("");

  async function login(nombre: string, contraseña: string) {
    if (!nombre || !contraseña) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }
    try {
      const resp = await fetch("http://192.168.1.38:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, contraseña }),
      });
      const data = await resp.json();

<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
      if (data.success === true && data.noUser === false) {
        Alert.alert("Login Exitoso");
        navigation.navigate("InicioUsuario" as never);
      } else if (data.noUser === true && data.success === false) {
        Alert.alert("Login Exitoso (Admin)");
        navigation.navigate("InicioAdministrador" as never);
      } else {
        Alert.alert("Credenciales incorrectas");
      }
    } catch {
      Alert.alert("Error", "No se pudo conectar con el servidor.");
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <View style={loginStyles.container}>
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

          <TouchableOpacity style={loginStyles.button} onPress={() => login(nombre, contraseña)}>
            <Text style={loginStyles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 12 }} onPress={() => navigation.navigate("RegistroUsuario" as never)}>
            <Text style={loginStyles.link}>¿No tienes cuenta? Regístrate</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
