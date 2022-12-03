import {Route, Routes} from "react-router-dom";
import {PrivateRoute} from "@/auth/components";
import {Header} from "@/components";
import {AppointmentList} from "@/features/appointments/components";
import {ServicesList} from '@/features/services/components';
import {Dashboard} from "@/pages";
import {UsersList} from "@/features/users/components";

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
                    <Route path="/citas" element={<AppointmentList/>}/>
                    <Route path="/servicios" element={<ServicesList/>}/>
                    <Route path="/usuarios" element={<UsersList/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    )
}
