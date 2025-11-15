import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Header from "../components/Header";
import { getAllmedicines } from "../services/medicinesService";
import { Medicine } from "../Types";
import MedicineIcon from "../../assets/medicine.svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  MedicinesScreen: undefined;
  MedicinePharmaciesScreen: { medicinesName: string[] };
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function MedicinesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [medicines, setmedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadmedicines = async () => {
      try {
      let data = await getAllmedicines();
      
      setmedicines(data);
      } catch (error) {
        console.error("Erreur lors du chargement :", error);
      } finally {
        setLoading(false);
      }
    };

    loadmedicines();
  }, []);

  const filteredmedicines = medicines.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#1F2B6C" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={18} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Rechercher une pharmacie"
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <TouchableOpacity style={styles.filterButton} >
          <Icon name="sliders" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Les medicaments :</Text>

      <FlatList
        data={filteredmedicines}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => 
          {
            return(
          <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate("MedicinePharmaciesScreen", { medicinesName: [item.name] });}}>
            <MedicineIcon width={55} height={55} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.composition}>{item.composition}</Text>
              {item.manufacturer && <Text style={styles.manufacturer}>{item.manufacturer}</Text>}              
              <Text style={styles.description}>{item.description}</Text>
            </View>

            <View
              style={[
                styles.status,
                {
                  backgroundColor: true ? "#C7F9CC" : "#FFB3B3",
                },
              ]}
            >
              <Text
                style={{
                  color: true ? "#008000" : "#B00000",
                  fontWeight: "600",
                  fontSize: 13,
                }}
              >
                { true ? "Disponible" : "Indisponible" }
              </Text>
            </View>
          </TouchableOpacity>
        )}}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFBFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    elevation: 2,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    height: 40,
    color: "#333",
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: "#1F2B6C",
    padding: 10,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2B6C",
    marginLeft: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    elevation: 2,
    minHeight: 100,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
  },
  composition: {
    fontSize: 13,
    color: "#555",
  },
  manufacturer: {
    fontSize: 13,
    color: "#777",
  },
  description: {
    fontSize: 12,
    color: "#003366",
    fontWeight: "500",
  },
  status: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});
