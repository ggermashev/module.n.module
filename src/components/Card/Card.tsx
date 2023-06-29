import React, {FC, useEffect, useRef} from 'react';
import styles from "./Card.module.scss"
import {useNavigate} from "react-router-dom";
import {IDress} from "../../types/types";
import ClearIcon from '@mui/icons-material/Clear';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


interface ICard extends IDress {
    shorRating?: boolean,
    action?: "add" | "remove",
    onAction: () => void,
}

const Card: FC<ICard> = ({
                             id,
                             title,
                             images,
                             module,
                             rating,
                             price,
                             shorRating = true,
                             action = "add",
                             onAction
                         }) => {

    const navigate = useNavigate()

    return (
        <div className={styles.cardWrap}>
            <div className={styles.head}>
                <p>{title}({module})</p>
                {shorRating && <div>
                    <span>{rating}</span>
                    <img src={require('../../images/star.png')}/>
                </div>}
            </div>
            <div className={styles.card}>
                <div className={styles.img} style={{backgroundImage: `url(${images[0]})`}}/>
                <div className={styles.about}>
                    <p>{price} Р</p>
                </div>
                <div className={styles.bagWrap}>
                    <InfoIcon onClick={() => navigate(`/shop/dress/${id}`)}/>
                    {/*<img onClick={() => navigate(`/shop/dress/${id}`)} src={require('../../images/more-info.png')}/>*/}
                    {action === "add"
                        ? <ShoppingBasketIcon onClick={onAction}/>
                        : <ClearIcon onClick={onAction}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;