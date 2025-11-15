import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AuthTabs from '../components/AuthTabs';

type RootStackParamList = {
  RegisterStep1: undefined;
  RegisterStep2: {
    email: string;
    password: string;
  };
  Login: undefined;
};

type NavProp = NativeStackNavigationProp<RootStackParamList, 'RegisterStep1'>;

const RegisterStep1 = () => {
  const navigation = useNavigation<NavProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleNext = () => {
    if (!email || !password || !confirmPass) {
      Alert.alert("Veuillez remplir tous les champs");
      return;
    }

    if (password !== confirmPass) {
      Alert.alert("Les mots de passe ne correspondent pas");
      return;
    }

    navigation.navigate('RegisterStep2', {
      email,
      password
    });
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
      <Text style={styles.step}>Étape 1 / 2</Text>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Mot de passe"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Confirmer mot de passe"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry
        value={confirmPass}
        onChangeText={setConfirmPass}
      />

      <TouchableOpacity style={styles.buttonOutline} onPress={handleNext}>
        <Text style={styles.buttonOutlineText}>Suivant</Text>
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

export default RegisterStep1;

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
  buttonOutline: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1F2B6C',
    paddingVertical: 15,
    marginTop: 10
  },
  buttonOutlineText: {
    textAlign: 'center',
    color: '#1F2B6C',
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
