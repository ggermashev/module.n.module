import React, {FC} from 'react';
import style from "./Button.module.scss"

interface IButton {
    children: React.ReactNode,
    onClick: () => void,
    className?: string,
    id?: string,
}


const Button: FC<IButton> = ({children, onClick, className, id}) => {
    return (
        <button id={id} className={`${className} ${style.button}`} onClick={onClick}>{children}</button>
    );
};

export default Button;