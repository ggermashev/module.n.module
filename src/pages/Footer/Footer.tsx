import React from 'react';
import style from './Footer.module.scss'
import {Link} from "react-router-dom";
import SocialLink from "../../components/SocialLink/SocialLink";
import {Grid} from "@mui/material";

const Footer = () => {
    return (
        <div id={"footer"} className={style.footer}>
            <h1>Модуль&Модуль</h1>
                <Grid container className={style.links} spacing={2}>
                    <Grid className={style.linkWrap} item md={3} sm={6} xs={6}>
                        <SocialLink link={""} icon={require('../../images/instagram.png')}><h3>Instagram</h3></SocialLink>
                    </Grid>
                    <Grid className={style.linkWrap} item md={3} sm={6} xs={6}>
                        <SocialLink link={""} icon={require('../../images/telegram.png')}><h3>Telegram</h3></SocialLink>
                    </Grid>
                    <Grid className={style.linkWrap} item md={3} sm={6} xs={6}>
                        <SocialLink link={""} icon={require('../../images/vk.png')}><h3>VK</h3></SocialLink>
                    </Grid>
                    <Grid className={style.linkWrap} item md={3} sm={6} xs={6}>
                        <SocialLink link={""} icon={require('../../images/email.png')}><h3>Email</h3></SocialLink>
                    </Grid>
                </Grid>
        </div>
    );
};

export default Footer;