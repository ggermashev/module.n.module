import React, {useCallback, useEffect, useMemo, useState} from 'react';
import style from './Shop.module.scss'
import {Grid} from "@mui/material";
import Button from "../../components/Button/Button";
import gsap from "gsap"
import Card from "../../components/Card/Card";
import RangeInput from "../../components/RangeInput/RangeInput";
import Select from "../../components/Select/Select";
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/Basket";
import {IDress} from "../../types/types";
import {useAppDispatch} from "../../redux";


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
            <Select title={"Модуль"} options={["body", "hand"]} value={module} defaultOption={"all"}
                    setValue={val => setModule(val)}/>
            <Button onClick={() => {}}><p>Применить</p></Button>
        </div>
        <Button id={"filter-btn"} className={style.filtersBtn} onClick={() => {
            onFilters()
        }}>
            <img src={require('../../images/vertical-dots.png')}/>
        </Button>
    </>)
}


const Shop = () => {

    const [dress, setDress] = useState<IDress[]>([])

    useEffect(() => {
        window.scrollTo(0, 0)

        setDress([
            {
                id: 0,
                title: "title",
                module: "module",
                description: "description",
                price: 5500,
                images: [require('../../images/dress1.png')],
                rating: 4.4,
            },
            {
                id: 1,
                title: "title",
                module: "module",
                description: "description",
                price: 5500,
                images: [require('../../images/dress1.png')],
                rating: 4.4,
            },
            {
                id: 2,
                title: "title",
                module: "module",
                description: "description",
                price: 5500,
                images: [require('../../images/dress1.png')],
                rating: 4.4,
            },
            {
                id: 3,
                title: "title",
                module: "module",
                description: "description",
                price: 5500,
                images: [require('../../images/dress1.png')],
                rating: 4.4,
            },
            {
                id: 4,
                title: "title",
                module: "module",
                description: "description",
                price: 5500,
                images: [require('../../images/dress1.png')],
                rating: 4.4,
            },

        ])

    }, [])

    const dispatch = useAppDispatch()

    return (
        <div className={style.shop}>

            <Filters/>

            <div className={style.dressWrap}>
                {dress.map(d =>
                    <Card id={d.id}
                          title={d.title}
                          images={d.images}
                          module={d.module}
                          rating={d.rating}
                          price={d.price}
                          onAction={() => {
                              dispatch(addProduct(d))
                          }}
                    />
                )}
            </div>
        </div>
    );
};

export default Shop;