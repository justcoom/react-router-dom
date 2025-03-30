import {Outlet} from "react-router-dom";

export const Croses = () => {
    return (
        <div>
            <div>HEADER</div>
            <Outlet/>
            <div>Footer</div>
        </div>
    );
};