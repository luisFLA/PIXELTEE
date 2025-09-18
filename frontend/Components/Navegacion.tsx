import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Pages/Login";
import InicioUsuario from "../Pages/InicioUsuario";
import InicioAdministrador from "../Pages/InicioAdministrador";
import RegistroUsuario from "../Pages/RegistroUsuario";
import SeleccionModeloCamisa from "../Pages/SeleccionModelo";
import SeleccionColor from "../Pages/SeleccionarColor";
import AccesoCamara from "../Pages/AccesoCamara";
import VistaPrevia from "../Pages/VistaPrevia";

const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,           
          tabBarStyle: { display: "none" }, 
        }}
      >
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="InicioUsuario"
          component={InicioUsuario}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="InicioAdministrador"
          component={InicioAdministrador}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="RegistroUsuario"
          component={RegistroUsuario}
          options={{ tabBarButton: () => null }}
        />

        {/* Agrego rene */}
        <Tab.Screen
          name="SeleccionModeloCamisa"
          component={SeleccionModeloCamisa}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="SeleccionColor"
          component={SeleccionColor}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="AccesoCamara"
          component={AccesoCamara}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen
          name="VistaPrevia"
          component={VistaPrevia}
          options={{ tabBarButton: () => null }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
