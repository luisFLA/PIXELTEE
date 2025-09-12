import React from 'react'
import { Text, View } from 'react-native'
import Navegacion from '../Components/Navegacion'
import { useNavigation } from '@react-navigation/native';

import { TextInput, Button, Alert } from 'react-native'
import { Usuario } from '../Modelos/Usuario';
import {
 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { registroStyles } from "../Estilo/registrostyle";

export default function InicioAdministrador() {
  const navigation = useNavigation();
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
         <StatusBar barStyle="dark-content" />
         <KeyboardAvoidingView
           style={{ flex: 1 }}
           behavior={Platform.OS === "ios" ? "padding" : undefined}
         >
           <View style={registroStyles.container}>
             <Text style={registroStyles.title}>Bienvenido Administrador</Text>
   
             
             {/* Botón primario negro */}
             <TouchableOpacity
               style={registroStyles.buttonPrimary}
              
             >
               <Text style={registroStyles.buttonTextPrimary}>Agregar logotipos al catalogo</Text>
             </TouchableOpacity>
                {/* Botón secundario negro */}
             <TouchableOpacity
               style={registroStyles.buttonPrimary}
              
             >
               <Text style={registroStyles.buttonTextPrimary}>Area de Pedidos</Text>
             </TouchableOpacity>
             {/* Enlace para volver a Login */}
             <TouchableOpacity
               style={registroStyles.buttonOutline}
               onPress={() => navigation.navigate("Login" as never)}
             >
               <Text style={registroStyles.buttonTextOutline}>
                 Volver al login?
               </Text>
             </TouchableOpacity>
           </View>
         </KeyboardAvoidingView>
       </SafeAreaView>
  )
}

