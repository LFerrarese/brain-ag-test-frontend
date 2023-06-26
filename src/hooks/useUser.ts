import { useContext } from "react";
import { UserContext, UserContextData } from "~/providers/UserProvider";

export const useUser = (): UserContextData => useContext(UserContext);
