import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colorStyles as s, base } from "../Estilo/SeleccionarColorStyle";
import { useNavigation, useRoute } from "@react-navigation/native";

const PALETA = ["#111111", "#ffffff", "#e11d48", "#2563eb", "#16a34a", "#f59e0b"];

export default function SeleccionarColor() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const [colorSel, setColorSel] = useState<string>("#111111");
  const modelo = route.params?.modelo as string | undefined;
  const fotoUri = route.params?.fotoUri as string | undefined;

  return (
    <View style={base.screen}>
      <Text style={base.title}>Selecciona un color</Text>

      <View style={s.paletteRow}>
        {PALETA.map((c) => (
          <TouchableOpacity
            key={c}
            onPress={() => setColorSel(c)}
            style={[s.swatch, { backgroundColor: c }, colorSel === c && s.selected]}
          />
        ))}
      </View>

      <Text style={base.muted}>Color elegido: {colorSel.toUpperCase()}</Text>

      <TouchableOpacity
        style={base.buttonPrimary}
        onPress={() => navigation.navigate("VistaPrevia" as never, { modelo, color: colorSel, fotoUri } as never)}
      >
        <Text style={base.buttonPrimaryText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}
