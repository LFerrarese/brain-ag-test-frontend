import { GenericObject } from "./GenericObject";

export interface DashboardAnalytics {
  farmsCount: number;
  farmsTotalAreaCount: number;
  vegetationAreaCount: number;
  arableAreaCount: number;
  farmsCropsCount: GenericObject<number>[];
  farmsPerState: GenericObject<number>[];
}
