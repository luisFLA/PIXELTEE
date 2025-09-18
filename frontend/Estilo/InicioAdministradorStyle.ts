import { StyleSheet } from "react-native";
import { base } from "./BaseStyle";

export const inicioAdminStyles = StyleSheet.create({
  actionsRow: { flexDirection: "row", gap: 12, justifyContent: "center", marginBottom: 16 },
  listItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export { base };
