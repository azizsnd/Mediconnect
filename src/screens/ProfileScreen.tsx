import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import Header from "../components/Header";

export default function ProfileScreen() {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    nom: "Sandid",
    prenom: "Mohamed Aziz",
    numero: "+216 99 801 344"
  });

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Mon Profil :</Text>
        <View style={{ alignItems: "center",alignSelf:'center', borderWidth: 2, borderColor: '#1F2B6C', borderRadius: 50, width: 80, height: 80, marginVertical: 20, padding: 10 }}>
          <Image
            source={require("../../assets/profile.png")}
            style={styles.avatar}
          />
        </View>

        {!editing && (
          <View style={styles.infoBox}>
            <View style={styles.row}>
              <Text style={styles.label}>Nom :</Text>
              <Text style={styles.value}>{user.nom}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Prénom :</Text>
              <Text style={styles.value}>{user.prenom}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Numéro :</Text>
              <Text style={styles.value}>{user.numero}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => setEditing(true)}>
              <Text style={styles.buttonText}>Modifier les informations</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.secondBtn]}>
              <Text style={styles.secondBtText}>Changer le mot de passe</Text>
            </TouchableOpacity>
          </View>
        )}

        {editing && (
          <View style={styles.infoBox}>
            <TextInput
              style={styles.input}
              value={user.nom}
              placeholder="Nom"
              onChangeText={(text) => setUser({ ...user, nom: text })}
            />

            <TextInput
              style={styles.input}
              value={user.prenom}
              placeholder="Prénom"
              onChangeText={(text) => setUser({ ...user, prenom: text })}
            />

            <TextInput
              style={styles.input}
              value={user.numero}
              placeholder="Numéro"
              onChangeText={(text) => setUser({ ...user, numero: text })}
            />

            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Enregistrer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.secondBtn]}
              onPress={() => setEditing(false)}
            >
              <Text style={styles.secondBtText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        )}
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
    marginBottom: 10,
  },

  infoBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  label: {
    fontSize: 18,
    color: "#000000e9",
    fontWeight: "600",
  },

  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2b6cc7",
  },

  button: {
    backgroundColor: "#1F2B6C",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  secondBtn: {
    backgroundColor: "#fff",
    borderColor: "#1F2B6C",
    borderWidth: 1,
  },

  secondBtText: {
    color: "#1F2B6C",
    fontSize: 16,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,},
});
