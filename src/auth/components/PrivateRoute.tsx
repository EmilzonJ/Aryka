import {useContext} from "react";
import {AuthContext} from "@/context";
import {Navigate, Outlet} from "react-router-dom";
import {Loader} from "@/components";

export const PrivateRoute = () => {
  const {isAuthenticated, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>;
  }

  return (isAuthenticated ? <Outlet/> : <Navigate to="/login"/>)
}
