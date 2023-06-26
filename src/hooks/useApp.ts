import { useContext } from "react";
import { AppContext, AppContextData } from "~/providers/AppProvider";

export const useApp = (): AppContextData => useContext(AppContext);
