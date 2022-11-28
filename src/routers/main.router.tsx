import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {PrivateRouter} from "@/routers";
import {LoginForm} from "@/pages";
import {Header} from "@/components";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>

        {/* private routes */}
        <Route element={<PrivateRouter/>} path="/*"/>
      </Routes>
    </BrowserRouter>
  )
}
