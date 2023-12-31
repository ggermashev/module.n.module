import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Error from "./pages/Error/Error";
import Main from "./pages/Main/Main";
import style from './App.module.scss'
import Footer from "./pages/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Shop from "./pages/Shop/Shop";
import Dress from "./pages/Dress/Dress";
import Profile from "./pages/Profile/Profile";
import Basket from "./pages/Basket/Basket";

function App() {

    return (
        <div className={style.app}>
            <main>
                <Navigation/>
                <div className={style.content}>
                    <Routes>
                        <Route path={"/"} element={<Main/>}/>
                        <Route path={"/shop"} element={<Shop/>}/>
                        <Route path={"/shop/dress/:id"} element={<Dress/>}/>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/basket"} element={<Basket/>}/>
                        <Route path={"*"} element={<Error/>}/>

                    </Routes>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
