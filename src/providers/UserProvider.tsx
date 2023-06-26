import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { User } from "@interfaces";
import { COOKIES } from "~/utils/constants";
import { getCookie } from "~/utils/cookies";
import { getUserInfoByToken, signIn, signUp } from "~/services/auth";

export type UserContextData = {
  user?: User;
  isAuthenticated: boolean;
  authenticate: Authenticate;
  register: Register;
};

type UserProviderProps = {
  children: ReactNode;
};

type Authenticate = (credentials: {
  email: string;
  password: string;
}) => Promise<true | undefined>;

type Register = (data: {
  email: string;
  password: string;
  name: string;
  phone: string;
}) => Promise<true | undefined>;

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>();

  const isAuthenticated = useMemo(() => !!user?.id, [user]);

  const authenticate: Authenticate = async (credentials) => {
    const response = await signIn(credentials);

    if (response) {
      setUser(response);
      return true;
    }
  };

  const register: Register = async (data) => {
    const response = await signUp(data);

    if (response) {
      return true;
    }
  };

  const getUserInfo = useCallback(async () => {
    const token = getCookie(COOKIES.TOKEN);

    if (!token) {
      setUser({} as User);
      return;
    }

    const response = await getUserInfoByToken();

    if (!response) {
      setUser({} as User);
    }

    setUser(response);
  }, []);

  useEffect(() => {
    getUserInfo();

    return () => {};
  }, [getUserInfo]);

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        authenticate,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
