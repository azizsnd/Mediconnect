import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PharmaciesScreen from "../screens/PharmaciesScreen";
import MedicinesScreen from "../screens/MedicinesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CustomDrawer from "../components/CustomDrawer";
import PharmacieStack from "./PharmacieStack";
import MedicineStack from "./MedicineStack";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        overlayColor: "transparent",
        drawerStyle: { width: "75%" },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Pharmacies" component={PharmacieStack} />
      <Drawer.Screen name="Medicines" component={MedicineStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
