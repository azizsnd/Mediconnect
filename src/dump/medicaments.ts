import { Medicine } from "../Types";

export const medicaments: Medicine[] = [  
  {
    "_id": "69126631901902d5138e90c0",
    "name": "Doliprane 1000mg",
    "composition": "Paracétamol",
    "description": "Traitement de la fièvre et de la douleur.",
    "manufacturer": "Sanofi",
    "requiresPrescription": false,
  },
  {
    "_id": "69133c62631f30bdbcad19cd",
    "name": "Amoxicilline 500mg",
    "composition": "Amoxicilline",
    "description": "Antibiotique",
    "requiresPrescription": true,
    "manufacturer": "Mylan",
  },
  {
    "_id": "69133e8a631f30bdbcad19d5",
    "name": "Spasfon Lyoc 160mg",
    "composition": "Phloroglucinol",
    "description": "Traitement des douleurs spasmodiques (ventre, voies urinaires).",
    "manufacturer": "Teva Santé",
    "requiresPrescription": false,
  },
  {
    "_id": "69133e91631f30bdbcad19d7",
    "name": "Prednisone 20mg",
    "composition": "Prednisone",
    "description": "Traitement anti-inflammatoire stéroïdien.",
    "manufacturer": "Biogaran",
    "requiresPrescription": true,
  }
]