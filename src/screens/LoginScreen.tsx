import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AuthTabs from '../components/AuthTabs';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import { AuthContext } from '../../contexts/AuthContext';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const { signIn } = useContext(AuthContext); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MEDICONNECT</Text>
      <Text style={styles.title}>Welcome Back</Text>

      <AuthTabs
        active="login"
        onPressLogin={() => {}}
        onPressRegister={() => navigation.navigate('RegisterStep1')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegisterStep1')}>
        <Text style={styles.createAccount}>
          Pas de compte ? <Text style={styles.link}>Créer un compte</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Retourner</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;


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
  inputContainer: {
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 14,
    marginBottom: 15,
    fontSize: 15
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#1F2B6C',
    marginBottom: 20,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#1F2B6C',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  createAccount: {
    textAlign: 'center',
    fontSize: 15,
  },
  link: {
    color: '#1F2B6C',
    fontWeight: '600',
  },
    backContainer: {
    marginTop: 20
  },
  backText: {
    color: '#1F2B6C',
    fontSize: 15
  }
});
