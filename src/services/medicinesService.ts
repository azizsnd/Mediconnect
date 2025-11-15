import axios from "axios";
import { Medicine, Pharmacy } from "../Types";
const baseUrl = 'http://10.0.2.2:3000/';


export const getAllmedicines = async (): Promise<Medicine[]> => {
  try {
    const response = await axios.get(`${baseUrl}medicament`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des medicament :", error);
    throw error;
  }
};



