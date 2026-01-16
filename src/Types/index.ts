export interface Address {
  street: string;
  city: string;
  postalCode: string;
  coordinates: number[];
}

export interface Pharmacy {
  _id: string;
  name: string;
  address: Address;
  phone: string;
  type: "day" | "night";
  isGuard: boolean;
}

export interface Medicine {
  _id: string;
  name: string;
  composition: string;
  description: string;
  manufacturer: string;
  requiresPrescription: boolean;
}

export interface SearhMedicinesResponse {
  pharmacy: Pharmacy;
  stockStatus: {
    medicament: Medicine, 
    isAvailable: boolean;
  }[];
  matchPercentage: number;

}