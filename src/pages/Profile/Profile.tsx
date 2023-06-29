import React from 'react';
import style from './Profile.module.scss'
import Order from "../../components/Order/Order";

const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.userInfo}>
                <div className={style.infoRow}>
                    <h3>Имя</h3>
                    <p>userName</p>
                </div>
                <div className={style.infoRow}>
                    <h3>Фамилия</h3>
                    <p>userName</p>
                </div>
                <div className={style.infoRow}>
                    <h3>Почта</h3>
                    <p>userName</p>
                </div>
                <div className={style.infoRow}>
                    <h3>Телефон</h3>
                    <p>userName</p>
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
        </div>
    );
};

export default Profile;
