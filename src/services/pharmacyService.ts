import axios from "axios";
import { Pharmacy, SearhMedicinesResponse } from "../Types";
import { medicamentPharmacies } from "../dump/medicamentPharmacie";
import { pharmacy } from "../dump/pharmacies";


const baseUrl = 'http://10.0.2.2:3000/';


export const getAllPharmacies = async (): Promise<Pharmacy[]> => {
 try {
    const response = await axios.get(`${baseUrl}pharmacy`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des pharmacies :", error);
    throw error;
  }
  /*  return pharmacy;*/

};

export const getPharmacyById = async (id: string): Promise<Pharmacy> => {
  try {
    const response = await axios.get(`${baseUrl}/pharmacy/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de la pharmacie :", error);
    throw error;
  }
};

export const getOpenPharmacies = async (): Promise<Pharmacy[]> => {
 try {
    const response = await axios.get(`${baseUrl}pharmacy/open`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des pharmacies ouvertes :", error);
    throw error;
  }
     /*return pharmacy;*/
};

  export const getAllmedicinePharmacies = async (medicinesName: string[]): Promise<SearhMedicinesResponse[]> => {
   try {
      const response = await axios.post(`${baseUrl}search/prescription/all`, { medicaments :medicinesName });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des pharmacies qu'ont ces medicaments :", error);
      throw error;
    }
   /* return medicamentPharmacies;*/
  };
  export const getAllOpenMedicinePharmacies = async (medicinesName: string[]): Promise<SearhMedicinesResponse[]> => {
    try {
      const response = await axios.post(`${baseUrl}search/prescription/open`, { medicaments :medicinesName });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des pharmacies qu'ont ces medicaments :", error);
      throw error;
    }
   /* return medicamentPharmacies;*/
  };