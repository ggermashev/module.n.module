import React, {useCallback, useEffect, useState} from 'react';
import style from "./Navigation.module.scss"
import {Link, useLocation} from "react-router-dom";
import gsap from "gsap"
import {useAppSelector} from "../../redux";
import Notification from "../Notification/Notification";

const Navigation = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const tl = gsap.timeline()

    const location = useLocation();

    const openMenu = useCallback(() => {
        if (!openMobileMenu) {
            tl.clear()
            tl.to(`#mobile-menu`, {
                duration: 0,
                display: "flex",
            }).to(`#mobile-menu`, {
                duration: 0.1,
                height: 300,
                opacity: 1
            }).then(() => {setOpenMobileMenu(true)})
        } else {
            tl.clear()
            tl.to(`#mobile-menu`, {
                duration: 0.05,
                height: 0,
                opacity: 0,
            }).to(`#mobile-menu`, {
                duration: 0,
                display: 'none',
            }).then(() => {setOpenMobileMenu(false)})
        }
    }, [openMobileMenu])

    const basket = useAppSelector(state => state.basket)

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth > 767 && openMobileMenu) {
            tl.to(`#mobile-menu`, {
                duration: 0.1,
                opacity: 0,
                height: 0,
            }).to(`#mobile-menu`, {
                duration: 0,
                display: 'none',
            })
            setOpenMobileMenu(false)
        }
    }, [windowWidth])

    return (
        <>
            <div className={style.navigation}>
                {windowWidth > 767 &&
                    <>
                        <div className={style.left}>
                            <div className={style.logo}>
                                <img src={require('../../images/logo.png')}/>
                            </div>
                            <div className={`${style.link} ${location.pathname === '/' && style.active}`}>
                                <Link to={""}>О проекте</Link>
                            </div>
                            <div className={`${style.link} ${location.pathname === '/shop' && style.active}`}>
                                <Link to={"/shop"}>Магазин</Link>
                            </div>
                            <div className={`${style.link} ${location.pathname === '/profile' && style.active}`}>
                                <Link to={"/profile"}>Профиль</Link>
                            </div>
                            <div className={`${style.link} ${location.pathname === '/basket' && style.active}`}>
                                {basket.countNewProducts > 0 &&
                                    <Notification><p>{basket.countNewProducts}</p></Notification>
                                }
                                <Link to={"/basket"}>Корзина</Link>
                            </div>
                        </div>
                        <div className={style.right}>
                            <Link to={""}>Вход</Link>
                        </div>
                    </>
                }
                {windowWidth <= 767 &&
                    <>
                        <div className={style.left}>
                            <div className={style.logo}>
                                <img src={require('../../images/logo.png')}/>
                            </div>
                        </div>
                        <div className={style.right}>
                            <img onClick={() => {
                                openMenu()
                            }} src={require('../../images/menu.png')}/>
                        </div>
                    </>
                }
            </div>

            <div id={'mobile-menu'} className={style.mobileMenu}>
                <div onClick={() => openMenu()} className={`${style.link} ${location.pathname === '/' && style.active}`}>
                    <Link to={"/"}>О проекте</Link>
                </div>
                <div onClick={() => openMenu()} className={`${style.link} ${location.pathname === '/shop' && style.active}`}>
                    <Link to={"/shop"}>Магазин</Link>
                </div>
                <div onClick={() => openMenu()} className={`${style.link} ${location.pathname === '/profile' && style.active}`}>
                    <Link to={"/profile"}>Профиль</Link>
                </div>
                <div onClick={() => openMenu()} className={`${style.link} ${location.pathname === '/basket' && style.active}`}>
                    {basket.countNewProducts > 0 &&
                        <Notification><p>{basket.countNewProducts}</p></Notification>
                    }
                    <Link to={"/basket"}>Корзина</Link>
                </div>
                <div onClick={() => openMenu()} className={style.link} style={{borderTop: "1px solid coral"}}>
                    <Link to={""}>Вход</Link>
                </div>
            </div>
        </>
    );
};

export default Navigation;