import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

type FilterRouteParams = {
  PharmacyFilterScreen: {
    initialFilters?: { onlyOpen?: boolean; city?: string };
    onApply?: (filters: { onlyOpen?: boolean; city?: string }) => void;
  };
};

export default function PharmacyFilterScreen() {
  const route = useRoute<RouteProp<FilterRouteParams, 'PharmacyFilterScreen'>>();
  const navigation = useNavigation();
  const [onlyOpen, setOnlyOpen] = useState(route.params?.initialFilters?.onlyOpen || false);
  const [city, setCity] = useState(route.params?.initialFilters?.city || '');

const handleApplyFilters = () => {
  const result = { onlyOpen, city }; 
  if (route.params?.onApply) route.params.onApply(result);
  navigation.goBack();
};


  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 20,elevation: 2, backgroundColor: '#fff' }}>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.goBack()}>
            <Icon name="x" size={30}  />
        </TouchableOpacity>
        <Text style={styles.title}>Filtre</Text>
      </View>
      <View style={styles.secondContainer}>
      <View style={styles.section}>
        <Text style={styles.label}>Localisation</Text>
        <TextInput
          style={styles.input}
          placeholder="Ville, Pays"
          value={city}
          onChangeText={setCity}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Les ouverts seulement</Text>
        <Switch
          trackColor={{ false: "#ddd", true: "#007BFF" }}
          thumbColor="#fff"
          value={onlyOpen}
          onValueChange={setOnlyOpen}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleApplyFilters}>
        <Text style={styles.buttonText}>Voir les résultats ➜</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F7FB" },
  secondContainer: { flex: 1, backgroundColor: "#F6F7FB",padding: 20 },
  title: { fontSize: 20, fontWeight: "bold"},
  section: { marginBottom: 25 },
  label: { fontSize: 16, color: "#000", marginBottom: 8 },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#001E6C",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
