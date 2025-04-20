import React from 'react';
import styles from "./components/Site.module.css";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {NavWrapper} from './components/pages/_styled';

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    ERROR: '/page/error',
    PRICES: '/prices',
    PROTECTEDPAGE: '/protectedPage'
} as const

function App() {
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/*<div>*/}
                    {/*    <NavLink to={"/page1"} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>*/}
                    {/*        Page1*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <NavLink to={"/page2"} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>*/}
                    {/*        Page2*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <NavLink to={"/page3"} className={(props) => props.isActive ? styles.activeNavLink : styles.navLink}>*/}
                    {/*        Page3*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}

                    <NavWrapper>
                        <NavLink to={PATH.PAGE1}>
                            Adidas
                        </NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE2}>
                            Puma
                        </NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE3}>
                            Abibas
                        </NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PRICES}>
                            Prices
                        </NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PROTECTEDPAGE}>
                            Protected Page
                        </NavLink>
                    </NavWrapper>
                </div>
                <div className={styles.content}>
                    {/*<Routes>*/}
                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={"/"} element={<Navigate to={PATH.PAGE1}/>}/>*/}

                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}

                    {/*    <Route path={"/*"} element={<Error404/>}/>*/}
                    {/*    /!*<Route path={"/*"} element={<Navigate to={PATH.ERROR}/>}/>*!/*/}

                    {/*</Routes>*/}
                    <div className={styles.horizontalNavigation}>
                        <Link to={PATH.PAGE1} className={styles.linkLikeButton}>To main page</Link>
                        <button onClick={navigateHandler} className={styles.buttonLikeLink}>Back</button>
                    </div>
                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

