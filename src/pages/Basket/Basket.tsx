import React, {FC, useEffect, useState} from 'react';
import style from "./Basket.module.scss"
import {BasketItem, IBasket} from "../../types/types";
import Card from "../../components/Card/Card";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "../../components/Button/Button";
import {useAppDispatch, useAppSelector} from "../../redux";
import {
    addNewOrder,
    clearNewProducts,
    clearProducts,
    decreaseCount,
    increaseCount,
    removeProduct
} from "../../redux/Basket";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

const Basket = () => {

    const basket = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch()

    const [showModal, setShowModal] = useState(false)

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
                        setShowModal(true)
                    }}><p>Оформить заказ</p></Button>
                </>
                : <h1>Корзина пуста</h1>

            }
            {showModal &&
                <ModalWindow onClose={() => {
                    setShowModal(false)
                }}>
                    <div className={style.submitOrder}>
                        <h3>К оплате: 3333 Р</h3>
                        <div className={style.row}>
                            <Button onClick={() => {setShowModal(false)}}>Назад</Button>
                            <Button onClick={() => {
                                dispatch(addNewOrder())
                                dispatch(clearProducts())
                                setShowModal(false)
                            }}>Подтвердить</Button>
                        </div>
                    </div>
                </ModalWindow>
            }
        </div>
    );
};

export default Basket;