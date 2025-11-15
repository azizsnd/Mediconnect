import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  RegisterStep1: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEDICONNECT</Text>
      <View style={styles.secondContainer}>
      <Image
        source={require('../../assets/homePicture.png')} 
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('RegisterStep1')}
      >
        <Text style={styles.primaryText}>S’inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.secondaryText}>Se connecter</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFD',
    padding: 20,
  },
  secondContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: '#1F2B6C',
    marginBottom: 5
  },
  image: {
    width: '80%',
    height: 250,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: '#1F2B6C',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#1F2B6C',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#1F2B6C',
    fontSize: 16,
    fontWeight: '600',
  },
});
