import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import React from "react";
import {LoginForm} from "@/pages";
import {PrivateRouter} from "@/routers/private.router";

export const mainRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginForm/>}/>

      {/* private routes */}
      <Route element={<PrivateRouter/>} path="/*"/>
    </Route>
  )
);
