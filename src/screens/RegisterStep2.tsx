import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AuthTabs from '../components/AuthTabs';
import { AuthContext } from '../../contexts/AuthContext';

type RootStackParamList = {
  RegisterStep1: undefined;
  RegisterStep2: {
    email: string;
    password: string;
  };
 Login: undefined;
};

type RouteProps = RouteProp<RootStackParamList, 'RegisterStep2'>;
type NavProps = NativeStackNavigationProp<RootStackParamList, 'RegisterStep2'>;

const RegisterStep2 = () => {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavProps>();

  const { email, password } = route.params;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const { signIn } = useContext(AuthContext); // ✅ On récupère signIn ici

  const handleRegister = () => {
    if (!firstName || !lastName || !phone) {
      Alert.alert("Veuillez remplir tous les champs");
      return;
    }

    console.log({
      email,
      password,
      firstName,
      lastName,
      phone
    });

    Alert.alert("Compte créé !");
    signIn(); // ✅ Cela bascule automatiquement vers AppNavigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MEDICONNECT</Text>
      <Text style={styles.title}>Créer votre compte</Text>
      <AuthTabs
        active="register"
        onPressLogin={() => navigation.navigate('Login')}
        onPressRegister={() => {}}
      />
      <Text style={styles.step}>Étape 2 / 2</Text>

      <TextInput
        placeholder="Nom"
        placeholderTextColor="#888"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        placeholder="Prénom"
        placeholderTextColor="#888"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        placeholder="Numéro"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Retourner</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterStep2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F9FBFD'
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2B6C',
    marginBottom: 5
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 25
  },
  step: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#E0E0E0',
    borderWidth: 1
  },
  button: {
    backgroundColor: '#1F2B6C',
    borderRadius: 12,
    paddingVertical: 15,
    marginTop: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  backContainer: {
    marginTop: 20
  },
  backText: {
    color: '#1F2B6C',
    fontSize: 15
  }
});
