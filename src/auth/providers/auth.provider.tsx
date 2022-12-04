import {useEffect, useState} from "react";
import {User} from "firebase/auth";
import {auth} from "@/firebase";
import {AuthContext} from "@/context";
import {AuthProviderProps} from "@/auth/models";

export const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
      setIsAuthenticated(!!user)
      setIsLoading(false)
    })
  }, [])

  const values = {
    user,
    auth,
    isLoading,
    isAuthenticated
  }

  return <AuthContext.Provider value={values}> {children} </AuthContext.Provider>
}
