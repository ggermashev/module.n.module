import React, {FC, useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import style from "./Dress.module.scss"
import {Rating} from "@mui/material";
import Review from "../../components/Review/Review";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import gsap from "gsap"
import ModalPhotos from "../../components/ModalPhotos/ModalPhotos";
import {IDress} from "../../types/types";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReplyIcon from '@mui/icons-material/Reply';
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../redux";
import {addProduct} from "../../redux/Basket";


const Dress = () => {

    const [dress, setDress] = useState<IDress>()


    const params = useParams()
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)

        setDress({
            id: 0,
            title: "title",
            module: "module",
            description: "description",
            price: 4400,
            images: [require('../../images/dress1.png')],
            rating: 4.7
        })

    }, [])

    const [userRating, setUserRating] = useState(0)

    const [showReviewForm, setShowReviewForm] = useState(false)
    const [showDressPhotos, setShowDressPhotos] = useState(false)

    const onShowPhoto = useCallback(() => {
        const tl1 = gsap.timeline()
        const tl2 = gsap.timeline()
        tl1.set('#camera', {
            display: "block"
        })
        tl2.set('#dress-photo', {
            opacity: 0.5,
        })

    }, [])

    const onHidePhoto = useCallback(() => {
        const tl1 = gsap.timeline()
        const tl2 = gsap.timeline()
        tl1.set('#camera', {
            display: "none"
        })
        tl2.set('#dress-photo', {
            opacity: 1,
        })
    }, [])

    return (
        <div className={style.dress}>
            <ReplyIcon
                onClick={() => {
                    navigate(-1)
                }} className={style.back}
            />
            <div className={style.wrap}>
                <div className={style.header}>
                    <p>Название(Модуль)</p>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <p>4.4</p>
                        <img src={require('../../images/star.png')}/>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.view}>
                        <div className={style.imgWrap} onMouseOver={onShowPhoto} onMouseLeave={onHidePhoto}
                             onClick={() => setShowDressPhotos(true)}>
                            <CameraAltIcon id={"camera"} className={style.camera}/>
                            <img id={"dress-photo"} src={require('../../images/dress1.png')}/>
                        </div>
                        <Rating
                            name="simple-controlled"
                            value={userRating}
                            onChange={(event, newValue) => {
                                if (userRating > 0) {
                                    return
                                }
                                if (newValue as number > 0) {
                                    setUserRating(newValue as number);
                                    setShowReviewForm(true)
                                }
                            }}
                        />
                        <div className={style.row}>
                            <p>5600 Р</p>
                            <ShoppingBasketIcon onClick={() => {
                                dispatch(addProduct(dress))
                            }}/>
                        </div>
                    </div>
                    <div className={style.description}>
                        <p>
                            Описание
                        </p>
                    </div>
                </div>
                <div className={style.reviews}>
                    <h1>Отзывы</h1>

                    <Review userName={"Фамилия Имя"} rating={5} review={"Тут есть фотки!!!!"}
                            images={[require('../../images/dress1.png'), require('../../images/dress2.png'),
                                require('../../images/dress1.png'), require('../../images/dress2.png'),
                                require('../../images/dress1.png'), require('../../images/dress2.png'),
                                require('../../images/dress1.png'), require('../../images/dress2.png'),
                                require('../../images/dress1.png'), require('../../images/dress2.png'),]
                            }/>
                    <Review userName={"Фамилия Имя"} rating={2} review={"Тут нет фоток(((((((("}/>

                    <div className={style.pagination}>
                        <KeyboardDoubleArrowLeftIcon className={style.arrow}/>
                        <KeyboardArrowLeftIcon className={style.arrow}/>
                        <p>1 / 5</p>
                        <KeyboardArrowRightIcon className={style.arrow}/>
                        <KeyboardDoubleArrowRightIcon className={style.arrow}/>
                    </div>
                </div>
            </div>
            {showReviewForm &&
                <ReviewForm
                    onSubmit={() => {
                        setShowReviewForm(false)
                    }}
                    rating={userRating}
                    onClose={() => {
                        setUserRating(0);
                        setShowReviewForm(false)
                    }}/>
            }
            {showDressPhotos &&
                <ModalPhotos
                    onClose={() => setShowDressPhotos(false)}
                    images={
                        [require('../../images/dress1.png'), require('../../images/dress2.png'),
                            require('../../images/dress1.png'), require('../../images/dress2.png'),
                            require('../../images/dress1.png'), require('../../images/dress2.png'),
                            require('../../images/dress1.png'), require('../../images/dress2.png'),
                            require('../../images/dress1.png'), require('../../images/dress2.png'),]
                    }
                />
            }
        </div>
    );
};

export default Dress;