import {createContext, useContext} from "react";

import {Auth, User} from "firebase/auth";

export interface AuthContextModel {
  auth: Auth
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export const AuthContext = createContext<AuthContextModel>(
  {} as AuthContextModel,
)


export const useAuth = (): AuthContextModel => {
  return useContext(AuthContext)
}

