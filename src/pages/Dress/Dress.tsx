import React, {useCallback, useEffect, useState} from 'react';
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


const Dress = () => {

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
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
            <img onClick={() => {
                navigate(-1)
            }} className={style.back} src={require('../../images/back.png')}/>
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
                            <img src={require('../../images/bag.png')}/>
                        </div>
                    </div>
                    <div className={style.description}>
                        <p>
                            Тут написан очень полезный текст. перечитывай трижды. Тут написан очень полезный
                            текст. перечитывай трижды.
                            Тут написан очень полезный текст. перечитывай трижды. Тут написан очень полезный
                            текст. перечитывай трижды.
                            Тут написан очень полезный текст. перечитывай трижды. Тут написан очень полезный
                            текст. перечитывай трижды.
                            Тут написан очень полезный текст. перечитывай трижды. Тут написан очень полезный
                            текст. перечитывай трижды.
                            Тут написан очень полезный текст. перечитывай трижды. Тут написан очень полезный
                            текст. перечитывай трижды.
                            Тут написан очень полезный текст. перечитывай трижды. Тут написан очень полезный
                            текст. перечитывай трижды.
                            Тут написан очень полезный текст. перечитывай трижды. Тут написан очень полезный
                            текст. перечитывай трижды.
                        </p>
                    </div>
                </div>
                <div className={style.reviews}>
                    <h1>Отзывы</h1>

                    <Review userName={"Ребиков Антон"} rating={5} review={"Тут есть фотки!!!!"}
                            images={[require('../../images/dress1.png'), require('../../images/dress2.png'),
                                require('../../images/dress1.png'), require('../../images/dress2.png'),
                                require('../../images/dress1.png'), require('../../images/dress2.png'),
                                require('../../images/dress1.png'), require('../../images/dress2.png'),
                                require('../../images/dress1.png'), require('../../images/dress2.png'),]
                            }/>
                    <Review userName={"Ребиков Антон"} rating={2} review={"Тут нет фоток(((((((("}/>

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