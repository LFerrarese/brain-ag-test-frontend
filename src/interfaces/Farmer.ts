import { Address } from "./Address";
import { Crop } from "./Crop";

export interface Farmer {
  id: string;
  name: string;
  document: string;
  farmName: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  Address: Address;
  FarmerCrop: Crop[];
}
