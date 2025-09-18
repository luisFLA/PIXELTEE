import { StyleSheet } from "react-native";
import { base } from "./BaseStyle";

export const colorStyles = StyleSheet.create({
  paletteRow: { flexDirection: "row", flexWrap: "wrap", gap: 12, justifyContent: "center" },
  swatch: {
    width: 48,
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  selected: { borderColor: "#111", borderWidth: 2 },
});
export { base };
