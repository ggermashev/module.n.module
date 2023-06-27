import React, {FC, useState} from 'react';
import style from "./Review.module.scss"
import ModalPhotos from "../ModalPhotos/ModalPhotos";

interface IReview {
    userName: string,
    rating: number,
    review: string,
    images?: string[]
}

const Review: FC<IReview> = ({userName, rating, review, images}) => {

    const [showPhotos, setShowPhotos] = useState(false)

    return (
        <div className={style.review}>
            <div className={style.header}>
                <p>{userName}</p>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <p>{rating}</p>
                    <img src={require('../../images/star.png')}/>
                </div>
            </div>
            <div className={style.content}>
                <p>{review}</p>
                {images && <img onClick={() => {setShowPhotos(true)}} src={require('../../images/photo.png')}/>}
            </div>
            {showPhotos && images && <ModalPhotos images={images} onClose={() => setShowPhotos(false)}/>}
        </div>
    );
};

export default Review;