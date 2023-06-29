import React, {FC, useState} from 'react';
import style from "./Order.module.scss"
import {IOrder} from "../../types/types";
import Button from "../Button/Button";
import ModalWindow from "../ModalWindow/ModalWindow";
import Card from "../Card/Card";
import WebStoriesIcon from '@mui/icons-material/WebStories';
import {useAppDispatch} from "../../redux";
import {addProduct} from "../../redux/Basket";


const Order: FC<IOrder> = ({id, date, status, products}) => {

    const [showProducts, setShowProducts] = useState(false)

    const dispatch = useAppDispatch()

    return (
        <div className={style.order}>
            <div className={style.header}>
                <h3>{date}</h3>
                <div>
                    <h3>{status}</h3>
                </div>
            </div>
            <div className={style.content}>
                Товаров в заказе: {products.length}
                <Button onClick={() => {
                    setShowProducts(true)
                }}>Посмотреть</Button>
            </div>
            <p className={style.price}>12300 Руб</p>

            {showProducts &&
                <ModalWindow onClose={() => {
                    setShowProducts(false)
                }}>
                    <div className={style.productsWrap}>
                        {products.map(product =>
                            <Card
                                title={product.title}
                                images={product.images}
                                module={product.module}
                                rating={product.rating}
                                price={product.price}
                                shorRating={false}
                                onAction={() => {dispatch(addProduct(product))}}
                            />
                        )}
                    </div>
                </ModalWindow>
            }
        </div>
    );
};

export default Order;