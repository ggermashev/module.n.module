import React, {useEffect, useRef} from 'react';
import style from './Main.module.scss'
import Slide from "../../components/Slide/Slide";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button";


const Main = () => {

    const navigate = useNavigate()

    return (
        <div id={"main"} className={style.main}>
            <div id={"first"} ></div>
            <Slide id={0}>
                <h1>Модуль&Модуль</h1>
            </Slide>
            <Slide id={1}>
                <h1>Собирай одежду</h1>
                <h1>как конструктор</h1>
            </Slide>
            <Slide id={2}>
                <h1>Выбирай образы</h1>
                <h1>на каждый день</h1>
            </Slide>
            <Slide id={3}>
                <h1>Удивляй окружающих</h1>
            </Slide>
            <Slide id={4}>
                <h1>Воплощай задумки</h1>
                <h1>в реальность</h1>
            </Slide>
            <Slide id={5}>
                <h1>Создавай свою моду</h1>
                <Button className={style.btn} onClick={() => navigate('/shop')}><h1>Перейти в магазин</h1></Button>
            </Slide>
        </div>
    );
};

export default Main;