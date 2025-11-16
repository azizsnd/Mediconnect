import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Header = () => {
const drawerNavigation = useNavigation<DrawerNavigationProp<any>>();
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>MEDICONNECT</Text>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Icon name="bell" size={22} color="#1F2B6C" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 15 }}>
          <Icon name="message-circle" size={22} color="#1F2B6C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => drawerNavigation.openDrawer()}>
          <Icon name="menu" size={24} color="#1F2B6C" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    elevation: 2,
  },
  logo: {
    color: "#1F2B6C",
    fontSize: 22,
    fontWeight: "900",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
