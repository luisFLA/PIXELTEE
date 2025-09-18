import { StyleSheet } from "react-native";
import { base } from "./BaseStyle";

export const previewStyles = StyleSheet.create({
  preview: {
    width: "100%",
    height: 320,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    backgroundColor: "#f3f3f3",
    marginBottom: 16,
  },
  actionsRow: { flexDirection: "row", gap: 12, justifyContent: "center" },
});
export { base };
