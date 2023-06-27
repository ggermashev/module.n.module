import React, {useCallback, useEffect, useMemo, useState} from 'react';
import style from './Shop.module.scss'
import {Grid} from "@mui/material";
import Button from "../../components/Button/Button";
import gsap from "gsap"
import Card from "../../components/Card/Card";
import RangeInput from "../../components/RangeInput/RangeInput";
import Select from "../../components/Select/Select";


const Filters = () => {

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(20000)
    const [module, setModule] = useState("all")

    const onFilters = useMemo(() => {
        let isVisible = false
        const tl = gsap.timeline()
        return () => {
            if (!isVisible) {
                tl.set('#filters', {
                    display: "flex"
                })
                tl.to('#filters', {
                    duration: 0.2,
                    opacity: 1,
                    width: '100vw'
                })
            } else {
                tl.to('#filters', {
                    duration: 0.2,
                    opacity: 0,
                    width: 0
                })
                tl.set('#filters', {
                    display: "none"
                })
            }
            isVisible = !isVisible
        }
    }, [])

    return (<>
        <div id={"filters"} className={style.filters}>
            <RangeInput title={"Цена от"} value={minPrice} setValue={setMinPrice}
                        maxValue={20000} minValue={0} step={500}/>
            <RangeInput title={"Цена до"} value={maxPrice} setValue={setMaxPrice}
                        maxValue={20000} minValue={0} step={500}/>
            <Select title={"Модуль"} options={["body", "hand"]} value={module} defaultOption={"all"} setValue={val => setModule(val)}/>
        </div>
        <Button id={"filter-btn"} className={style.filtersBtn} onClick={() => {
            onFilters()
        }}>
            <img src={require('../../images/vertical-dots.png')}/>
        </Button>
    </>)
}


const Shop = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={style.shop}>

            <Filters/>

            <div className={style.dressWrap}>
                <Card id={0} title={"title"} img={require('../../images/dress1.png')} module={"Рукав"} rating={5} price={5000}/>
                <Card id={1} title={"title"} img={require('../../images/dress2.png')} module={"Рукав"} rating={4.3}
                      price={6500}/>
                <Card id={2} title={"title"} img={require('../../images/dress1.png')} module={"Рукав"} rating={5} price={5000}/>
                <Card id={3} title={"title"} img={require('../../images/dress2.png')} module={"Рукав"} rating={4.3}
                      price={6500}/>
                <Card id={4} title={"title"} img={require('../../images/dress1.png')} module={"Рукав"} rating={5} price={5000}/>
                <Card id={5} title={"title"} img={require('../../images/dress2.png')} module={"Рукав"} rating={4.3}
                      price={6500}/>
                <Card id={6} title={"title"} img={require('../../images/dress1.png')} module={"Рукав"} rating={5} price={5000}/>
                <Card id={7} title={"title"} img={require('../../images/dress2.png')} module={"Рукав"} rating={4.3}
                      price={6500}/>
                <Card id={8} title={"title"} img={require('../../images/dress1.png')} module={"Рукав"}
                                          rating={5} price={5000}/>
                <Card id={9} title={"title"} img={require('../../images/dress2.png')} module={"Рукав"} rating={4.3}
                      price={6500}/>

            </div>
        </div>
    );
};

export default Shop;