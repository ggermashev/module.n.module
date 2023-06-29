import React, {FC, useEffect, useState} from 'react';
import style from "./Basket.module.scss"
import {BasketItem, IBasket} from "../../types/types";
import Card from "../../components/Card/Card";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "../../components/Button/Button";
import {useAppDispatch, useAppSelector} from "../../redux";
import {clearNewProducts, decreaseCount, increaseCount, removeProduct} from "../../redux/Basket";

const Basket = () => {

    const basket = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearNewProducts())
    }, [])

    return (
        <div className={style.basket}>
            {basket.products.length > 0
                ? <>
                    <div className={style.items}>
                        {basket.products.map((item, i) =>
                            <div className={style.basketItem}>
                                <Card title={item.product.title}
                                      module={item.product.module}
                                      price={item.product.price}
                                      images={item.product.images}
                                      rating={item.product.rating}
                                      shorRating={false}
                                      action={"remove"}
                                      onAction={() => {
                                          dispatch(removeProduct(item.product.id))
                                      }}
                                />
                                <div className={style.counter}>
                                    <RemoveIcon onClick={() => {
                                        dispatch(decreaseCount(i))
                                    }}/>
                                    <p>{item.count}</p>
                                    <AddIcon onClick={() => {
                                        dispatch(increaseCount(i))
                                    }}/>
                                </div>
                            </div>
                        )}
                    </div>
                    <Button onClick={() => {
                    }}><p>Оформить заказ</p></Button>
                </>
                : <h1>Корзина пуста</h1>

            }
        </div>
    );
};

export default Basket;