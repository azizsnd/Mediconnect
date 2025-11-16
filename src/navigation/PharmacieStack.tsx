import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PharmaciesScreen from '../screens/PharmaciesScreen';
import PharmacyFilterScreen from '../screens/PharmacyFilterScreen';

export type RootStackParamList = {
  PharmaciesScreen: undefined;
  PharmacyFilterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const PharmacieStack = () => {
  return (
      <Stack.Navigator initialRouteName="PharmaciesScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PharmaciesScreen" component={PharmaciesScreen} />
        <Stack.Screen name="PharmacyFilterScreen" component={PharmacyFilterScreen} />
      </Stack.Navigator>
  );
};

export default PharmacieStack;
