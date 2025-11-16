import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Feather";
import { AuthContext } from "../../contexts/AuthContext";

export default function CustomDrawer(props: any) {
  const navigation = props.navigation;
  const { signOut } = useContext(AuthContext); 

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/profile.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Med Aziz Sandid</Text>
        </View>
        <DrawerItemList {...props} />

      </DrawerContentScrollView>

      <TouchableOpacity
        style={styles.logoutContainer}
        onPress={signOut}
      >
        <Icon name="log-out" size={20} color="red" />
        <Text style={styles.logoutText}>Déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  logoutContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    color: "red",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "600",
  },
});
