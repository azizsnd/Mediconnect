import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AuthTabsProps {
  active: 'login' | 'register';
  onPressLogin: () => void;
  onPressRegister: () => void;
}

const AuthTabs: React.FC<AuthTabsProps> = ({
  active,
  onPressLogin,
  onPressRegister
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tab,
          active === 'login' && styles.activeTab
        ]}
        onPress={onPressLogin}
      >
        <Text style={[styles.tabText, active === 'login' && styles.activeText]}>
          Se Connecter
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          active === 'register' && styles.activeTab
        ]}
        onPress={onPressRegister}
      >
        <Text style={[styles.tabText, active === 'register' && styles.activeText]}>
          S’inscrire
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 30,
    backgroundColor: '#F2F2F5'
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center'
  },
  tabText: {
    fontSize: 16,
    color: '#1F2B6C'
  },
  activeTab: {
    backgroundColor: '#1F2B6C'
  },
  activeText: {
    color: '#fff',
    fontWeight: '600'
  }
});
