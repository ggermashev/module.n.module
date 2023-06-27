import React, {FC, Fragment} from 'react';
import style from "./ModalWindow.module.scss"
import {createPortal} from "react-dom";

interface IModalWindow {
    children: React.ReactNode,
    onClose: () => void,
}

const ModalWindow: FC<IModalWindow> = ({children, onClose}) => {
    return (
        createPortal(
            <div className={style.moduleWindow} onClick={onClose}>
                <div className={style.wrap} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>, document.body)
    );
};

export default ModalWindow;