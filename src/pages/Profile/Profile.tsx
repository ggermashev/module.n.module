import React, {useEffect, useState} from 'react';
import style from './Profile.module.scss'
import Order from "../../components/Order/Order";
import {useAppDispatch, useAppSelector} from "../../redux";
import {clearNewOrders} from "../../redux/Basket";
import EditIcon from '@mui/icons-material/Edit';
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import TextInput from "../../components/TextInput/TextInput";
import {setUser} from "../../redux/User";
import Button from "../../components/Button/Button";

const Profile = () => {

    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const [staticUser, setStaticUser] = useState(user)

    useEffect(() => {
        dispatch(clearNewOrders())
    }, [])

    const [showEditModal, setShowEditModal] = useState(false)

    return (
        <div className={style.profile}>
            <div className={style.userInfo}>
                <div className={style.infoRow}>
                    <h3>Имя <EditIcon onClick={() => {
                        setShowEditModal(true)
                    }}/></h3>
                    <p>{staticUser.name}</p>
                </div>
                <div className={style.infoRow}>
                    <h3>Фамилия <EditIcon onClick={() => {
                        setShowEditModal(true)
                    }}/></h3>
                    <p>{staticUser.surname}</p>
                </div>
                <div className={style.infoRow}>
                    <h3>Почта <EditIcon onClick={() => {
                        setShowEditModal(true)
                    }}/></h3>
                    <p>{staticUser.mail}</p>
                </div>
                <div className={style.infoRow}>
                    <h3>Телефон <EditIcon onClick={() => {
                        setShowEditModal(true)
                    }}/></h3>
                    <p>{staticUser.phone}</p>
                </div>
            </div>
            <div className={style.orders}>
                <Order date={"29.06.2023"} status={"Готово"}
                       products={[
                           {
                               id: 0,
                               title: "title",
                               module: "hand",
                               description: "description",
                               price: 7700,
                               rating: 4.3,
                               images: [require('../../images/dress1.png'), require('../../images/dress2.png')]
                           },
                           {
                               id: 1,
                               title: "title",
                               module: "hand",
                               description: "description",
                               price: 7700,
                               rating: 4.3,
                               images: [require('../../images/dress1.png'), require('../../images/dress2.png')]
                           },
                           {
                               id: 2,
                               title: "title",
                               module: "hand",
                               description: "description",
                               price: 7700,
                               rating: 4.3,
                               images: [require('../../images/dress1.png'), require('../../images/dress2.png')]
                           },
                           {
                               id: 3,
                               title: "title",
                               module: "hand",
                               description: "description",
                               price: 7700,
                               rating: 4.3,
                               images: [require('../../images/dress1.png'), require('../../images/dress2.png')]
                           },
                       ]}
                       id={0}/>
                <Order date={"29.06.2023"} status={"В пути"} products={[]} id={1}/>
                <Order date={"29.06.2023"} status={"В пути"} products={[]} id={2}/>
                <Order date={"29.06.2023"} status={"В пути"} products={[]} id={3}/>
            </div>
            {showEditModal &&
                <ModalWindow onClose={() => {
                    dispatch(setUser(staticUser))
                    setShowEditModal(false)
                }}>
                    <div className={style.inputs}>
                        <TextInput label={"Имя"} value={user.name}
                                   setValue={(val: string) => dispatch(setUser({name: val}))}/>
                        <TextInput label={"Фамилия"} value={user.surname}
                                   setValue={(val: string) => dispatch(setUser({surname: val}))}/>
                        <TextInput type={"mail"} label={"Почта"} value={user.mail}
                                   setValue={(val: string) => dispatch(setUser({mail: val}))}/>
                        <TextInput type={"phone"} label={"Телефон"} value={user.phone}
                                   setValue={(val: string) => dispatch(setUser({phone: val}))}/>

                        <div className={style.row}>
                            <Button onClick={() => {
                                dispatch(setUser(staticUser))
                                setShowEditModal(false)
                            }}>Назад</Button>
                            <Button onClick={() => {
                                setStaticUser(user)
                                setShowEditModal(false)
                            }}>Применить</Button>
                        </div>
                    </div>
                </ModalWindow>
            }
        </div>
    );
};

export default Profile;
