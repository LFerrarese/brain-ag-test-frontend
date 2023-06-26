import { City } from "./City";

export interface State {
  id: string;
  name: string;
  acronym: string;
  City: City[];
}
