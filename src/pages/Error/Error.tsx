import React from 'react';
import style from './Error.module.scss'

const Error = () => {
    return (
        <div className={style.error}>
            <div className={style.wrap}>
                <h1>Страница не найдена</h1>
                <img src={require('../../images/sad-emoji.png')}/>
            </div>
        </div>

    );
};

export default Error;
