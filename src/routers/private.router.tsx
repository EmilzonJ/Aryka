import {Route, Routes} from "react-router-dom";
import {PrivateRoute} from "@/auth/components";
import {Dashboard} from "@/pages";
import {Header} from "@/components";


export const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
    </div>
  )
}

export const PrivateRouter = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/citas" element={<Dashboard/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  )
}
