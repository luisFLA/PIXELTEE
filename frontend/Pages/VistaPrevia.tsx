import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { previewStyles as s, base } from "../Estilo/VistaPreviaStyle";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function VistaPrevia() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const modelo = route.params?.modelo as string | undefined;
  const color = (route.params?.color as string | undefined) ?? "#111111";
  const fotoUri = route.params?.fotoUri as string | undefined;

  return (
    <View style={base.screen}>
      <Text style={base.title}>Vista previa</Text>

      {fotoUri ? (
        <Image source={{ uri: fotoUri }} style={s.preview} />
      ) : (
        <View style={[s.preview, { alignItems: "center", justifyContent: "center" }]}>
          <Text style={base.muted}>Sin imagen. Usa “AccesoCamara”.</Text>
        </View>
      )}

      <Text style={base.muted}>Modelo: {modelo ?? "no seleccionado"}</Text>
      <Text style={base.muted}>Color: {color.toUpperCase()}</Text>

      <View style={s.actionsRow}>
        <TouchableOpacity style={base.buttonPrimary} onPress={() => navigation.navigate("SeleccionModeloCamisa" as never)}>
          <Text style={base.buttonPrimaryText}>Cambiar modelo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={base.buttonOutline}
          onPress={() => navigation.navigate("SeleccionColor" as never, { modelo, fotoUri } as never)}
        >
          <Text style={base.buttonOutlineText}>Cambiar color</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
