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
import { getAllmedicinePharmacies, getAllPharmacies } from "../services/pharmacyService";
import { SearhMedicinesResponse } from "../Types";
import PharmacyIcon from "../../assets/pharmacy.svg";
import { getPharmacyStatus } from "../utils/pharmacyStatus";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  MedicinePharmaciesScreen: { medicinesName: string[] };
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "MedicinePharmaciesScreen"
>;

type RouteProps = RouteProp<
  RootStackParamList,
  "MedicinePharmaciesScreen"
>;


export default function MedicinePharmaciesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();

  const { medicinesName } = route.params;
  console.log("Medicine ID:", medicinesName);
  const [pharmacies, setPharmacies] = useState<SearhMedicinesResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadPharmacies = async () => {
      try {
        let data = await getAllmedicinePharmacies(medicinesName);         
        setPharmacies(data.filter((item) => item.matchPercentage === 100));
      } catch (error) {
        console.error("Erreur lors du chargement :", error);
      } finally {
        setLoading(false);
      }
    };

    loadPharmacies();
  }, []);

  const filteredPharmacies = pharmacies.filter((p) =>
    p.pharmacy.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="#1F2B6C" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#1F2B6C" />
        </TouchableOpacity>
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

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("PharmacyFilterScreen" as never)}
        >
          <Icon name="sliders" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Les pharmacies :</Text>

      <FlatList
        data={filteredPharmacies}
        keyExtractor={(item) => item.pharmacy._id}
        renderItem={({ item }) => {
          const status = getPharmacyStatus(item.pharmacy.type, item.pharmacy.isGuard);
          return (
            <View style={styles.card}>
              <PharmacyIcon width={55} height={55} />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.pharmacy.name}</Text>
                <Text style={styles.address}>{item.pharmacy.address.street}</Text>
                <Text style={styles.city}>{item.pharmacy.address.city}</Text>
                <Text style={styles.phone}>Tel : {item.pharmacy.phone}</Text>
              </View>

              <View
                style={[
                  styles.status,
                  {
                    backgroundColor:
                      status === "Ouvert" ? "#C7F9CC" : "#FFB3B3",
                  },
                ]}
              >
                <Text
                  style={{
                    color: status === "Ouvert" ? "#008000" : "#B00000",
                    fontWeight: "600",
                    fontSize: 13,
                  }}
                >
                  {status}
                </Text>
              </View>
            </View>
          );
        }}
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
    paddingHorizontal: 15,
    marginVertical: 30,
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
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
  },
  address: {
    fontSize: 13,
    color: "#555",
  },
  city: {
    fontSize: 13,
    color: "#777",
  },
  phone: {
    fontSize: 13,
    color: "#003366",
    fontWeight: "500",
  },
  status: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});
