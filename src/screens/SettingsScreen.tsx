import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import Header from "../components/Header";

export default function SettingsScreen() {
  const [language, setLanguage] = useState("fr");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Paramètres :</Text>

        <View style={styles.box}>
          <Text style={styles.sectionTitle}>Langue</Text>
          <View style={{ flexDirection: "row", gap: 10, marginBottom: 30 }}>
            <TouchableOpacity
              onPress={() => setLanguage("fr")}
              style={[
                styles.optionBtn,
                language === "fr" && styles.optionBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.optionText,
                  language === "fr" && styles.optionTextActive,
                ]}
              >
                Français
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setLanguage("en")}
              style={[
                styles.optionBtn,
                language === "en" && styles.optionBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.optionText,
                  language === "en" && styles.optionTextActive,
                ]}
              >
                English
              </Text>
            </TouchableOpacity>
          </View>

*          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.rowBetween}>
            <Text style={styles.label}>Activer les notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: "#ccc", true: "#1F2B6C" }}
              thumbColor="#fff"
            />
          </View>

*          <Text style={styles.sectionTitle}>Apparence</Text>
          <View style={styles.rowBetween}>
            <Text style={styles.label}>Mode sombre</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#ccc", true: "#1F2B6C" }}
              thumbColor="#fff"
            />
          </View>

          <TouchableOpacity style={styles.deleteBtn}>
            <Text style={styles.deleteText}>Supprimer mon compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFBFF",
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1F2B6C",
    marginBottom: 30,
  },

  box: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#000",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  optionBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1F2B6C",
  },

  optionBtnActive: {
    backgroundColor: "#1F2B6C",
  },

  optionText: {
    fontSize: 16,
    color: "#1F2B6C",
    fontWeight: "600",
  },

  optionTextActive: {
    color: "#fff",
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },

  deleteBtn: {
    marginTop: 60,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#B00000",
    alignItems: "center",
  },

  deleteText: {
    color: "#B00000",
    fontSize: 16,
    fontWeight: "600",
  },
});
