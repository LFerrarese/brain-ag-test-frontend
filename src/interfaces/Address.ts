import { City } from "./City";
import { State } from "./State";

export interface Address {
  id: string;
  farmerId: string;
  stateId: string;
  cityId: string;
  createdAt: string;
  updatedAt: string;
  State: State;
  City: City;
}
