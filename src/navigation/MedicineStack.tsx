import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PharmacyFilterScreen from '../screens/PharmacyFilterScreen';
import MedicinesScreen from '../screens/MedicinesScreen';
import MedicinePharmaciesScreen from '../screens/MedicinePharmaciesScreen';

export type RootStackParamList = {
  PharmacyFilterScreen: undefined;
  MedicinesScreen: undefined;
  MedicinePharmaciesScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MedicineStack = () => {
  return (
      <Stack.Navigator initialRouteName="MedicinesScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MedicinesScreen" component={MedicinesScreen} />
        <Stack.Screen name="PharmacyFilterScreen" component={PharmacyFilterScreen} />
        <Stack.Screen name="MedicinePharmaciesScreen" component={MedicinePharmaciesScreen} />
      </Stack.Navigator>
  );
};

export default MedicineStack;
