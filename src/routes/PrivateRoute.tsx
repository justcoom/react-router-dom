import {ReactNode} from "react";
import {Navigate, Outlet} from "react-router-dom";

type Props = {
    // children: ReactNode
}

export const PrivateRoute = (props: Props) => {
    const isAuth = true

    return (
        <>
            {isAuth ? <Outlet/> : <Navigate to={'/login'}/>}
        </>
    );
};