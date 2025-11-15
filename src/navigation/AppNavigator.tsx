import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PharmaciesScreen from '../screens/PharmaciesScreen';
import PharmacyFilterScreen from '../screens/PharmacyFilterScreen';
import MedicinesScreen from '../screens/MedicinesScreen';
import MedicinePharmaciesScreen from '../screens/MedicinePharmaciesScreen';

export type RootStackParamList = {
  PharmaciesScreen: undefined;
  PharmacyFilterScreen: undefined;
  Profile: undefined;
  Settings: undefined;
  MedicinesScreen: undefined;
  MedicinePharmaciesScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="MedicinesScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PharmaciesScreen" component={PharmaciesScreen} />
        <Stack.Screen name="PharmacyFilterScreen" component={PharmacyFilterScreen} />
        <Stack.Screen name="MedicinesScreen" component={MedicinesScreen} />
        <Stack.Screen name="MedicinePharmaciesScreen" component={MedicinePharmaciesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
