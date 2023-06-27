import React, {FC, useRef, useState} from 'react';
import style from "./ReviewForm.module.scss"
import ModalWindow from "../ModalWindow/ModalWindow";
import CloseIcon from '@mui/icons-material/Close';
import {Rating, TextField} from "@mui/material";
import Button from "../Button/Button";
import DeleteIcon from '@mui/icons-material/Delete';

interface IReviewForm {
    onClose: () => void,
    onSubmit: () => void,
    rating: number,
}

const ReviewForm: FC<IReviewForm> = ({onClose, onSubmit, rating}) => {
    const [review, setReview] = useState("")
    const [images, setImages] = useState<File[]>([])
    const input = useRef(null)
    return (
        <ModalWindow onClose={onClose}>
            <div className={style.reviewForm}>
                <h1>Оставьте отзыв!</h1>
                <div className={style.description}>
                    <TextField value={review} onChange={e => setReview(e.target.value)} className={style.description} multiline rows={4} label="Отзыв" variant="outlined" />
                    <Rating className={style.rating} value={rating} readOnly/>
                </div>
                <div className={style.row}>
                    <h3>Фото товара</h3>
                    <Button onClick={() => { // @ts-ignore
                        input.current.click()}}>
                        Загрузить
                        <input multiple ref={input} type={"file"} hidden onInput={(e) => { // @ts-ignore
                            setImages([...images, ...e.target.files])}}/>
                    </Button>
                </div>
                <div className={style.images}>
                    {images.map((img, i) =>
                        <div key={i} className={style.imageWrap}>
                            <DeleteIcon onClick={() => {
                                setImages(images.filter((image, j) => i !== j))
                            }} className={style.deleteIcon}/>
                            <img src={URL.createObjectURL(img)}/>
                        </div>)}
                </div>
                <Button onClick={() => {
                    onSubmit()
                }}>Отправить</Button>

            </div>
        </ModalWindow>
    );
};

export default ReviewForm;