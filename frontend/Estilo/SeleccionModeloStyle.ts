import { StyleSheet } from "react-native";
import { base } from "./BaseStyle";

export const modeloStyles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 16, justifyContent: "space-between" },
  cardBox: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: { width: 120, height: 120, borderRadius: 8, marginBottom: 8, backgroundColor: "#f3f3f3" },
});
export { base };
