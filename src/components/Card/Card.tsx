import React, {FC, useEffect, useRef} from 'react';
import styles from "./Card.module.scss"
import {useNavigate} from "react-router-dom";

interface ICard {
    id?: number,
    title: string,
    img: string,
    module: string,
    rating: number,
    price: number,
}

const Card: FC<ICard> = ({id, title, img, module, rating, price}) => {

    const navigate = useNavigate()

    return (
        <div className={styles.cardWrap}>
            <div className={styles.head}>
                <p>{title}({module})</p>
                <div>
                    <span>{rating}</span>
                    <img src={require('../../images/star.png')}/>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.img} style={{backgroundImage: `url(${img})`}}/>
                <div className={styles.about}>
                    <p>{price} Р</p>
                </div>
                <div className={styles.bagWrap}>
                    <img onClick={() => navigate(`/shop/dress/${id}`)} src={require('../../images/more-info.png')}/>
                    <img src={require('../../images/bag.png')}/>
                </div>
            </div>
        </div>
    );
};

export default Card;